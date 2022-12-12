import React,{useState,useEffect} from 'react'
import Navbar from './AuthNavbar.js'
import person from '../../images/person.png'
import { FormHadle } from './handlefom.js'

export default function Form() {
  const {createAds, createFiles, error}  = FormHadle()
    const [data, setData] = useState({
        product_name:'',
        location:'',
        contact:'',
        price:'',
        category:'',
        description:'',
        picture:''  
    })
 const [file, setFile] = useState('')
    const handleChange = (e)=>{
          setData({...data,[e.target.id]:e.target.value})
    }
  const handleFiles = (e)=>{
     setData({...data,'picture':e.target.files[0].name})
     setFile(e.target.files[0])
  }
  const handleSubmit = (e)=>{
      e.preventDefault();
      createAds(data)
      // createFiles(file)
    }
    useEffect(()=>{
    let profilediv = document.getElementById('profile_div')
    let profileinput = document.getElementById('picture')
    if(profilediv){
        profileinput.style.display = 'none'
        profilediv.addEventListener('click',()=>{
          profileinput.setAttribute('type','file')
          profileinput.click()
        })
    }
    },[])
  return ( 
    <div className='post-form'>
         <Navbar/>
      <form onSubmit={handleSubmit}>
 <label>What are you want to sell</label>
          <input type="text" 
          className='post-form-input'
          id="product_name"
          onChange={handleChange}
          value={data.product_name}
          required
          />

<label>Where are you</label>
          <input type="text" 
           className='post-form-input'
          id="location"
          onChange={handleChange}
          value={data.location}
          required
          />

<label>Your contact</label>
          <input type="number" 
           className='post-form-input'
          id="contact"
          onChange={handleChange}
          value={data.contact}
          required
          />

<label>Amount you want to sell</label>
          <input type="text" 
          className='post-form-input'
          id="price"
          onChange={handleChange}
          value={data.price}
          required
          />

<label>Choose category</label>
          <input type="text" 
          className='post-form-input'
          id="category"
          onChange={handleChange}
          value={data.category}
          required
          />

<label>Product description</label>
          <input type='text'
          className='post-form-input'
          id="description"
          onChange={handleChange}
          value={data.description}
          required
          />

     <div className='midle-user-profile' id='profile_div'>
          <div className='midle-image'><img src={person} alt=''/></div>
          <div>Add profile</div>
      </div>
          <input type='text'
          className='post-form-input'
          id="picture"
          name="file"
          onChange={handleFiles}
          required
          />

<button type='submit' className='add-post-button'>Add post</button>
      </form>
    </div>
  )
}
