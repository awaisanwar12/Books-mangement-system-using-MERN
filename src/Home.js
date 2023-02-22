import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home(){
    const [sessionData,setsessionData]=useState(null);
    const navigate =useNavigate();
    // const find = sessionStorage.getItem("user");
    useEffect(()=>{
        const data = sessionStorage.getItem("user");
    
    
    if (!data) {
      // Redirect to sign-in page
      navigate("/signin")
    
    }else {
        setsessionData(data);
    }
},[]);
// sessionStorage.setItem("user",JSON.stringify(user));
 
  
    return(
        <div >
<h1 >
    Welcome to home pagae </h1>


</div>
    )

}
export default Home;

