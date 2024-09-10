import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  const [usernamerequired, setUsernamerequired] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const Userdata = JSON.parse(localStorage.getItem("users"));
    if (Userdata) {
      if (
        logindata.email === Userdata.email &&
        logindata.password === Userdata.password
      ) {
        alert("valid");
        navigate("/crud");
      } else {
        alert("invalid");
      }
    } else {
      alert("not valid user");
    }
  };
  const handleForgetpassword = () => {
    const Userdata = JSON.parse(localStorage.getItem("users"));
    if (logindata.email && logindata.email === Userdata.email) {
      props.reset();
    } else {
      setUsernamerequired("Valid Username required before reseting password");
    }
  };
   
  //reponsive..
  // const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  // console.log(width);

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="w-2/3 md:w-1/3 lg:w-1/4 shadow-lg bg-white rounded-lg">
        <div className="flex flex-col p-4 gap-2">
          <h1 className="text-3xl text-center font-semibold">Login</h1>
          <label className="text-gray-600" htmlFor="Username">
            Email
          </label>
          <input
            type="text"
            className="rounded-lg p-2 border border-gray-300"
            value={logindata.email}
            onChange={(event) =>
              setLogindata({ ...logindata, email: event.target.value })
            }
            required
          />
          <p className="text-sm text-red-600">{usernamerequired}</p>
          <label className="text-gray-600" htmlFor="Password">
            Password
          </label>
          <input
            className="rounded-lg p-2 border border-gray-300"
            type="password"
            value={logindata.password}
            onChange={(event) =>
              setLogindata({ ...logindata, password: event.target.value })
            }
            required
          />
          <button
            className="bg-blue-500 py-1 rounded-lg text-white font-semibold text-xl hover:bg-blue-600"
            onClick={handleLogin}
          >
            Log in
          </button>
          <button
            className="p-2 text-blue-600 border-b border-gray-300 hover:underline"
            onClick={handleForgetpassword}
          >
            Forget Passowrd ?
          </button>
          <button
            className="p-1 bg-green-500 text-white font-semibold w-3/5 mx-auto rounded-lg hover:bg-green-600"
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
