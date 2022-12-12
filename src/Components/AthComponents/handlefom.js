import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

  export const FormHadle = ()=>{
      const [error,setError] = useState(null)
      const navgate = useNavigate()
      //function that put form data
     const createAds = async(formData)=>{
        const response = await fetch('http://localhost:5007/api/postads',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        }) 
        const json = await response.json();
        if(response.ok){
        //    console.log(json)
        navgate('/')
        }
        if(!response.ok){
            setError(err.message)
        }
     }

      //I miss some logic to submit both content of form togather includes files so am put two request to server
        //if you know how to do that within a some request please commit me on my git repository

        const createFiles =async (file)=>{
            const formData = new FormData();
            formData.append('file',file)
          await axios.post('http://localhost:5007/api/postads',formData,{
                headers:{"Content-Type":"multiparty/form-data"}
            })
           
        }

        return {createAds, createFiles, error}
  }