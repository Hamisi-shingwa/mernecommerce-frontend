import React from 'react'
import './style.css'
import './mediastyle.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home_main from './Components/Home/Home_main'
import  Auth_main  from './Components/AthComponents/Auth_main'
import Footer from './Components/Home/Footer'
import AuthContext from './Contexts/AuthContext'


export default function App() {
      return (
    <div className='app'>
    <BrowserRouter>
    <AuthContext>
    <Routes>
      <Route path='/' element = {<Home_main/>}/>
    </Routes>
    <Auth_main/>
    </AuthContext>
    </BrowserRouter>
    </div>
      )
    }
