import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import "./Signin.css";
function Signin(){

const [email, setEmail]= useState("");
const[password,setPassword]= useState("");
const navigate = useNavigate();

const handleSubmit=(e)=>{

e.preventDefault();

const users = JSON.parse(localStorage.getItem("users"));
const user =users.find(user=>(user.email===email&& user.password===password));
if (user){
  // sessionStorage.setItem("isLoggedIn",true);
  sessionStorage.setItem("user",JSON.stringify(user));
  navigate("/")
} else{
  alert("invalid username or password")
}

// const storedData = JSON.parse(localStorage.getItem("users"));


//  let find = storedData.find(user=>user.email==email&& user.password==password);
//  console.log(find);
//  if(find){

 
//   navigate("/");
// } else {
//     alert("invalid username or password");
// }


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
        <label   htmlFor="password">Password:</label>
        <input className=""
          type="password"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      
      <button className="footer"  type="submit">Log In</button>
    </form>
    <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
    </div>
    </div>)
}

export default Signin;








