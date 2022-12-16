//Here we import Handlecontext medhode from Context folder
//Handlecontext method return signup function for login and error for display an err
//if exists
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {HandleContext} from '../../Contexts/handleAuthContext'
import back from '../../images/back.png'

//create main register function components 
export default function Register() {

//Here is where signup and error values are distructured from method
const {signup,error} = HandleContext()

//below is stateHooks for handling user loading button
const [isLoading,setIsloading] = useState(false)

//Then create stateHooks that that contain empty value of our input field
const [inputData, setInputData] = useState({
  "fullname":'',
  "email":"",
  "password":""
})
//handleChange method is called when each input field is changed and only 
//what it does is to update the value stateHooks to that of input field 
const handleChange = (e)=>{
    setInputData({...inputData,[e.target.id]:e.target.value})
}
//handleSubmit is method called when form is submited
//onceis called also signin method is called and pass our stateHooks Data
const handleSubmit =async  (e)=>{
e.preventDefault();
setIsloading(true)
await signup(inputData)
}

//Then Html form to be returned are as bellow
return (
<div className='register-container'>

<div className='register-top'>
    <Link to='/' className='register-Content-first'><img src={back} alt=''/></Link>
    <div className='register-Content'>Sign Up</div>
    <Link to='/login' className='register-Content-third'>SignIn</Link>
</div>
<form className='register-form' onSubmit={handleSubmit}>
<label>Full Name</label>
    <input
    className='form-input'
    id="fullname"
    type='email'
    placeholder='Full name'
    onChange={handleChange}
/>

<label>Email Address</label>
    <input
    className='form-input'
    id="email"
    type='email'
    placeholder='Email Adress'
    onChange={handleChange}
/>

<label>Password</label>
    <input
    className='form-input'
    id="password"
    type='password'
    placeholder='Strong Password(eg ABCabc@12)'
    onChange={handleChange}
/>
<input type='submit' value="Signup"  className='form-input-submit'/>
{error && (
  <div className='error'>{error && setIsloading(false)}</div>
)}
</form>

<div className='middle-register'>
  <div className='middle-register-signup'>
    <div>Arleady have an account</div>
    <Link to='/register' className='middleregister-link'> Sign Ip</Link>
  </div>
  <div className='middle-register-password-reset'>
    <div>Forgot your password</div>
    <Link to='/register' className='middle-register-link'>Reset it</Link>
  </div>
</div>

{isLoading ? (
     <div className='isLoading'>
     <div className='isLoading-element'></div>
     </div>
 ):(
  null
 )}

 <div className='form-footer'>
 <div className='form-footer-element'>Powerd by AmyCs</div>
 </div>
</div>
)
}
