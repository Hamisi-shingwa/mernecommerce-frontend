import React,{useContext} from "react";
import { Navigate } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import { AuthContext_Provider } from "../../Contexts/AuthContext";
import Product_detail from "./Description/Product_detail";
import Form from "./form";
import Login from "./Login";
import Register from "./Register";
import User_profile from "./user_profile";

export default function  Auth_main(){
  const {user} =  useContext(AuthContext_Provider)
  return(
        <Routes>
            <Route path="/register"  element={ <Register/>}/> 
            <Route path="/login" element={  <Login/>}/>  
            <Route path="/user_profile" element={<User_profile/>}  />  
            <Route path="/post_form" element={<Form/>}/>  
            <Route path="/product_detail" element={<Product_detail/>}/>  
        </Routes>
        )
    }
