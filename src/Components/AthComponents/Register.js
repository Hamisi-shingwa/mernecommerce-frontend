import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {HandleContext} from '../../Contexts/handleAuthContext'


export default function Register() {
    const {signup,error} = HandleContext()
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
       await signup(inputData)
      }
  return (
    <div className='register-container'>
       <form className='register-form' onSubmit={handleSubmit}>
       <div className='register-top'>
            <Link to='/' className='register-Content'>Home</Link>
            <Link to='/login' className='register-Content'>Signin</Link>
        </div>
        <label>Full name</label>
           <input
           className='form-input'
           id="fullname"
           type='text'
           onChange={handleChange}
        />

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

     <label>Comfirm-Password</label>
           <input
            className='form-input'
           type='password'
      />
     <input type='submit' value="Signup"  className='form-input'/>
     {error && (
         <div className='error'>{error}</div>
     )}
     </form>
    </div>
  )
}
