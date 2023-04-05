import React from "react";
import { message } from "antd";
import { useNavigate } from "react-router";
import { Button, Form, Input } from "antd";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    fetch("/signup", {
      method: "Post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => { console.log(data)
      
      message.success("Succesfull")})
  
      .catch((err) =>{ console.error(err);
        
        message.error("failed to signin up")
      })
        
    }
  

  return (
    <Form name="register" onFinish={handleSubmit} style={{ maxWidth: 600 }}>
      <Form.Item
        label="First Name"
        name="firstname"
        rules={[
          {
            required: true,
            message: "Please input your First Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastname"
        rules={[
          {
            required: true,
            message: "Please input your Last Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        <Button onClick={() => navigate("/signin")}>Sign In</Button>
      </Form.Item>
    </Form>
  );
}
export default Signup;
// Same functionality with states mangement and conditional checks

// function Signup (){
// const [firstName,setFirstName]= useState();
// const [lastName,setLastName] = useState();
// const [email,setEmail]= useState("");
// const [password,setPassword]= useState();
// const[confirmPassword,setConfirmPassword]=useState();

// const navigate = useNavigate();
// const handleInputChange = (e)=>{
//     const {id,value}= e.target;

//     if (id ==="firstName"){
//         setFirstName(value);
//     }
//     if(id==="lastName"){
//         setLastName(value);
//     }
//     if(id==="email"){
//         setEmail(value);
//     }
//     if(id==="password"){
//         setPassword(value);
//     }
//     if(id==="confirmPassword"){
//         setConfirmPassword(value);
//     }
// }

// const handleSubmit = (e)=>{

//     let isValid =true;
//     let errorMessage = "";
//     if(!firstName){
//         isValid= false;
//         errorMessage="First Name is required";

//     } else if (!lastName){
//         isValid = false;
//         errorMessage = "Last Name is required";
//     } else if(!email){
//     isValid = false ;
//     errorMessage =" Email is required";
//     } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
//         isValid =false;
//         errorMessage="invalid email address";
//     } else if (!password){
//         isValid = false;
//         errorMessage=" password is required";

//     } else if (password.length > 8){
//         isValid =false;
//         errorMessage ="password length must be less 8 charcter long ";
//     } else if (password!==confirmPassword){
//         isValid = false;
//         errorMessage ="password do not match";
//     }
// if (!isValid) {
//     alert(errorMessage);
//     return;
// }
// const data = {
//     firstName,
//     lastName,
//     email,
//     password,
//     confirmPassword,
// };

//   <div  className="form">

//           <label className="label" htmlFor="firstName">First Name </label>
//           <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>

//           <label className="" htmlFor="lastName">Last Name </label>
//           <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>

//           <label className="" htmlFor="email">Email </label>
//           <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>

//           <label className="" htmlFor="password">Password </label>
//           <input className="" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>

//           <label className="" htmlFor="confirmPassword">Confirm Password </label>
//           <input className="" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>

//       <button onClick={(e)=>handleSubmit(e)} type="submit" className="btn">Sign Up</button>

//     <button onClick={()=>navigate("/signin")}>Sign In</button>

//   </div>

// export default Signup;
