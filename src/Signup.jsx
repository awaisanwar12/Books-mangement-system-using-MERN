import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// import "./Signup.css";


function Signup (){
const [firstName,setFirstName]= useState();
const [lastName,setLastName] = useState();
const [email,setEmail]= useState("");
const [password,setPassword]= useState();
const[confirmPassword,setConfirmPassword]=useState();

const navigate = useNavigate();
const handleInputChange = (e)=>{
    const {id,value}= e.target;

    if (id ==="firstName"){
        setFirstName(value);
    }
    if(id==="lastName"){
        setLastName(value);
    }
    if(id==="email"){
        setEmail(value);
    }
    if(id==="password"){
        setPassword(value);
    }
    if(id==="confirmPassword"){
        setConfirmPassword(value);
    }
}
const handleSubmit = (e)=>{
    e.preventDefault();
    let isValid =true;
    let errorMessage = "";
    if(!firstName){
        isValid= false;
        errorMessage="First Name is required";


    } else if (!lastName){
        isValid = false;
        errorMessage = "Last Name is required";
    } else if(!email){
    isValid = false ;
    errorMessage =" Email is required";
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        isValid =false;
        errorMessage="invalid email address";
    } else if (!password){
        isValid = false;
        errorMessage=" password is required";
        
    } else if (password.length > 8){
        isValid =false;
        errorMessage ="password length must be less 8 charcter long ";
    } else if (password!==confirmPassword){
        isValid = false;
        errorMessage ="password do not match";
    }
if (!isValid) {
    alert(errorMessage);
    return;
}
const data = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
};
 
 let users=JSON.parse(localStorage.getItem("users"))||[];


 console.log(users);
  if(users&&users.length){
  let found =users.find(user=>(user.email==email))
  if(found){
  alert("duplicate email");
  return;
  }}
  
  users.push(data)
  localStorage.setItem("users",JSON.stringify(users));

  
  navigate("/dashboard")
};


return (
    
  <div  className="">
<form>
          <label className="label" htmlFor="firstName">First Name </label>
          <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
      
      
          <label className="" htmlFor="lastName">Last Name </label>
          <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
      
      
          <label className="" htmlFor="email">Email </label>
          <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
      
      
          <label className="" htmlFor="password">Password </label>
          <input className="" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
      
      
          <label className="" htmlFor="confirmPassword">Confirm Password </label>
          <input className="" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
    
  
      <button onClick={(e)=>handleSubmit(e)} type="submit" className="btn">Register</button>
  
    <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
    </form>
  </div>


)}
export default Signup;