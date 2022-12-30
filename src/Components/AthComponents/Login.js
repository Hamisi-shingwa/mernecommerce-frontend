//Here we import Handlecontext medhode from Context folder
//Handlecontext method return signin function for login and error for display an err
//if exists
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {HandleContext} from '../../Contexts/handleAuthContext'
import back from '../../images/back.png'

//create main login function components 
export default function Login() {

//Here is where signin and error values are distructured from method
const {signin,error,setError} = HandleContext()

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
  const errorElement= document.querySelector('.error')
  if(errorElement) setError(null)
}
//handleSubmit is method called when form is submited
//onceis called also signin method is called and pass our stateHooks Data
const handleSubmit =async  (e)=>{
e.preventDefault();
setIsloading(true)
await signin(inputData)
//Check if return is error isLoading become false
if(error!=="") setIsloading(false)

}

//Then Html form to be returned are as bellow
return (
<div className='register-container'>

<div className='register-top'>
    <Link to='/' className='register-Content-first'><img src={back} alt=''/></Link>
    <div className='register-Content'>Sign In</div>
    <Link to='/register' className='register-Content-third'>Join Free</Link>
</div>
<form className='register-form' onSubmit={handleSubmit}>


<label>Email Address or Member ID</label>
    <input
    className='form-input'
    id="email"
    type='email'
    placeholder='Email Adress or Member ID'
    onChange={handleChange}
/>

<label>Password</label>
    <input
    className='form-input'
    id="password"
    type='password'
    placeholder='Valid password'
    onChange={handleChange}
/>
<input type='submit' value="Signin"  className='form-input-submit'/>
{error && (
  <div className='error'>{error}</div>
)}

<div className='middle-register'>
  <div className='middle-register-signup'>
    <div>Don't have account</div>
    <Link to='/register' className='middleregister-link'> Sign Up</Link>
  </div>
  <div className='middle-register-password-reset'>
    <div>Forgot your password</div>
    <Link to='/register' className='middle-register-link'>Reset it</Link>
  </div>
</div>

</form>



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
