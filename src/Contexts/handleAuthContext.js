import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext_Provider } from './AuthContext'

export const HandleContext = ()=>{
  const {isLogin} = useContext(AuthContext_Provider)
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const signup = async (signup_data)=>{
      //fetch data
    const response = await fetch('http://localhost:5007/api/signin',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(signup_data)
    })
    const res = await response.json()
    if(!response.ok){
         setError(res.error)
    }
    if(response.ok){
      navigate('/login')
    }
     
  }
  //Run script for login in services
  const signin = async(signin_data)=>{
    const response = await fetch('http://localhost:5007/api/signup',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(signin_data)
  })
  const res = await response.json()
  if(!response.ok){
       setError(res.error)
  }
  if(response.ok){
     //first lets put signup_data into localstorage
   localStorage.setItem('user',JSON.stringify(res))
   //The call isLogin
   isLogin(res)
   navigate("/user_profile")
  }
  }
  
  return {signup,error,signin}
}