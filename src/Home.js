import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import  "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Home(){

    
    
    const navigate =useNavigate();
  
        function logOut(){
            sessionStorage.removeItem("data")
        
            navigate("/signin")
          }
        
  
    return (
            
      <div className="home">           
  
<div className="bg">
    <div>
<h1 className="h1">
    Welcome to home page </h1>
<button className="btn" onClick={logOut} > Log out </button>
</div>
</div>
</div>

    )

}
export default Home;

