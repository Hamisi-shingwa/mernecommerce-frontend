import React,{useState, createContext,useEffect} from 'react'

export const AuthContext_Provider = createContext();
export default function AuthContext({children}) {
 const [user,setUser] = useState({data:''})

 const isLogin = (data)=>{
     setUser({...user,data}) 
     console.log(user) 
 }
 const isLgout = ()=>{
   localStorage.removeItem('user')
   setUser({data:''})
 }
 useEffect(()=>{
  const newvalues = localStorage.getItem('user')
  const datas = JSON.parse(newvalues)
  setUser({...user,datas})
 },[])
  return (
  <AuthContext_Provider.Provider value={{user, isLogin}}>
       {children}
  </AuthContext_Provider.Provider>
  )
}
