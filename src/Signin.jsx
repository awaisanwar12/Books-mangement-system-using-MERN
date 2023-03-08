import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import "./Signin.css";
function Signin(){

const [email, setEmail]= useState("");
const[password,setPassword]= useState("");

const navigate = useNavigate();




 const handleSubmit=(e)=>{
  if (email === "" || password === "") {
    alert("Please fill in all fields.");}
e.preventDefault();


  fetch("/signin", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email,password
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    sessionStorage.setItem("data", JSON.stringify(data)); // Fix: use JSON.stringify instead of JSON.parse
    
    navigate("/");
  })
  .catch(error => {
    console.error("There was a problem signing in:");
  });
 

}







return(
  
<div className="main">
    <div className="">
<form className="" onSubmit={handleSubmit}>
      <div>
        <label  htmlFor="username">Username:</label>
        <input 
          type="text"
          className=""
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div>
        <label   htmlFor="password">Password: </label>
        <input className=""
          type="password"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      
      <button className="footer"  type="submit">Log In</button>
    </form>
    <button onClick={()=>navigate("/signup")}>Signup</button>
    </div>
    </div>)
}

export default Signin;






