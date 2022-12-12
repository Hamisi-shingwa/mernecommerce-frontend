import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {HandleContext} from '../../Contexts/handleAuthContext'

//create main login function  
export default function Login() {
    const {signin,error} = HandleContext()
      const [inputData, setInputData] = useState({
          "fullname":'',
          "email":"",
          "password":""
      })
     
      const handleChange = (e)=>{
           setInputData({...inputData,[e.target.id]:e.target.value})
      }
      const handleSubmit =async  (e)=>{
       e.preventDefault();
       await signin(inputData)
      }
  return (
    <div className='register-container'>
       <form className='register-form' onSubmit={handleSubmit}>
       <div className='register-top'>
            <Link to='/' className='register-Content'>Home</Link>
            <Link to='/register' className='register-Content'>Signup</Link>
        </div>

     <label>Email</label>
           <input
           className='form-input'
           id="email"
           type='email'
           onChange={handleChange}
      />

     <label>Password</label>
           <input
            className='form-input'
            id="password"
           type='password'
           onChange={handleChange}
      />
     <input type='submit' value="Signin"  className='form-input'/>
     {error && (
         <div className='error'>{error}</div>
     )}
     </form>
    </div>
  )
}
