import React from "react";

import { useNavigate } from "react-router-dom";


import { Button, Checkbox, Form, Input,message,Space } from "antd";
function Signin() {
  
 

  
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    

    fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
      
    })
        .then((response) => {
          
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          
          return response.json();
        })
        .then((data) => {
          
          message.success("Signin successfull")
          
          sessionStorage.setItem("data", JSON.stringify(data)); // Fix: use JSON.stringify instead of JSON.parse

          navigate("/");
         
        })
        .catch((error) => {
          console.error("There was a problem signing in:");
         message.error("There is a problem in loging in")
        })
    
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}

      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="email"

        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"

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
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        
        <Button type="primary" htmlType="submit"   >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
export default Signin;
// Another way of achieving functionality through use states and connditional checks
// function Signin(){

// const [email, setEmail]= useState("");
// const[password,setPassword]= useState("");

// const navigate = useNavigate();

//   const handleSubmit=(e)=>{
//   if (email === "" || password === "") {
//     alert("Please fill in all fields.");}
// e.preventDefault();

//   fetch("/signin", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     email,password
//   })
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then(data => {
//     sessionStorage.setItem("data", JSON.stringify(data)); // Fix: use JSON.stringify instead of JSON.parse

//     navigate("/");
//   })
//   .catch(error => {
//     console.error("There was a problem signing in:");
//   });

// }

// return(

// <div className="main">
//     <div className="">
// <form className="" onSubmit={handleSubmit}>
//       <div>
//         <label  htmlFor="username">Username:</label>
//         <input
//           type="text"
//           className=""
//           value={email}
//           onChange={(e)=>setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label   htmlFor="password">Password: </label>
//         <input className=""
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e)=>setPassword(e.target.value)}
//         />
//       </div>

//       <button className="footer"  type="submit">Log In</button>
//     </form>
//     <button onClick={()=>navigate("/signup")}>Signup</button>
//     </div>
//     </div>)
// }

// export default Signin;
