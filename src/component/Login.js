import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

const Login = (props) => {
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  const[usernamerequired, setUsernamerequired]=useState("")
  const navigate=useNavigate()
  

 const handleLogin=()=>{
  const Userdata= JSON.parse(localStorage.getItem("users"))
  if(Userdata){
    if(logindata.email===Userdata.email && logindata.password===Userdata.password){
      alert("valid")
      navigate("/crud");
    }
    else{
      alert("invalid")
    }
  
  }
  else{
    alert("not valid user")
  }
 }
 const handleForgetpassword=()=>{
  const Userdata= JSON.parse(localStorage.getItem("users"))
  if(logindata.email && logindata.email===Userdata.email){
    props.reset()
  }else{
    setUsernamerequired("Valid Username required before reseting password")
  }
 }
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-1/4 shadow-lg bg-gray-200 rounded-lg">
        <div className="flex flex-col p-4 gap-2">
          <h1 className="text-3xl text-center font-semibold">Login</h1>
          <label className="text-gray-600" htmlFor="Username">
            Email
          </label>
          <input
            type="text"
            className="rounded-lg h-8"
            value={logindata.email}
            onChange={(event) =>
              setLogindata({ ...logindata, email: event.target.value })
            }
            required
          />
          <p  className="text-sm text-red-600">{usernamerequired}</p>
          <label className="text-gray-600" htmlFor="Password">
            Password
          </label>
          <input
            className="rounded-lg h-8"
            type="password"
            value={logindata.password}
            onChange={(event) =>
              setLogindata({ ...logindata, password: event.target.value })
            }
            required
          />
          <button className="bg-blue-500 p-1 rounded-lg text-white"onClick={handleLogin}>
            Login
          </button>
          <button className="p-2 text-blue-600 border-b border-gray-300"onClick={handleForgetpassword}>
            Forget Passowrd ?
          </button>
          <button
            className="p-1 bg-green-500 text-white font-semibold w-1/2 mx-auto rounded-lg"
            onClick={props.signup}
          >
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
