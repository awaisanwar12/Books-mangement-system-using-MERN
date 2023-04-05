import React from "react";
import { useNavigate } from "react-router-dom";
import  "./Home.css";


function Home(){

    
    
    const navigate =useNavigate();
  
        function logOut(){
            sessionStorage.removeItem("data")
        
            navigate("/signin")
           
          }
        
  
    return (
            
      <div className="home">           
  
<div >
    
<h1 className="h1">
    Welcome to home page </h1>
<button className="btn" onClick={()=>logOut()} > Log out </button>

</div>
</div>

    )

}
export default Home;

