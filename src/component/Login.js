import React, { useState } from "react";

const Login = (props) => {
  const [logindata, setLogindata] = useState({
    username: "",
    password: "",
  });

 const handleLogin=()=>{
  const Userdata= JSON.parse(localStorage.getItem("users"))
  if(Userdata){
    if(logindata.username===Userdata.email && logindata.password===Userdata.password){
      alert("valid")
    }
    else{
      alert("invalid")
    }
  
  }
  else{
    alert("not valid user")
  }
 }
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-1/4 shadow-lg bg-gray-200 rounded-lg">
        <div className="flex flex-col p-4 gap-2">
          <label className="text-gray-600" htmlFor="Username">
            Username
          </label>
          <input
            type="text"
            className="rounded-lg h-8"
            value={logindata.username}
            onChange={(event) =>
              setLogindata({ ...logindata, username: event.target.value })
            }
            required
          />
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
          <button className="p-2 text-blue-600 border-b border-gray-300">
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
