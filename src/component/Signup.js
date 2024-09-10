  import React, { useState } from "react";

  const Signup = (props) => {
    const [data, setData] = useState({
      firstname: "",
      surname: "",
      phone: "",
      Address: "",
      email: "",
      CRPassword: "",
      COPassword: "",
    });

    const [validatephone, setValidatephone] = useState("");
    const [validatepassword, setPasswordvalidation] = useState("");
    const handleClick = () => {
      if (data.firstname && data.surname) {
        setData({
          ...data,
          firstname: data.firstname[0].toUpperCase() + data.firstname.slice(1),
          surname: data.surname[0].toUpperCase() + data.surname.slice(1),
        });
      }

      if (data.phone.length !== 10) {
        if(data.phone.length===0){
          setValidatephone(" ")
        }else{
        setValidatephone("phone number must be equal to 10 digit");}
      } else setValidatephone("");

      if (data.CRPassword !== data.COPassword) {
        setPasswordvalidation("password should be matched");
      } else setPasswordvalidation("");

      if (
        data.phone.length === 10 &&
        data.CRPassword === data.COPassword &&
        data.firstname &&
        data.surname &&
        data.Address &&
        data.email
      ) {
        localStorage.setItem(
          "users",
          JSON.stringify({
            email: data.email,
            password: data.CRPassword,
            phone: data.phone,
          })
        );
        props.login();
      } else {
        alert("fields shouldnot be empty");
      }
    };
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-2 lg:w-1/3 px-4 py-2 shadow-lg rounded-lg bg-gray-100 border border-gray-300">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-left font-bold">Sign Up</h1>
            <h1 className="text-md text-gray-500">It's quick and easy.</h1>
          </div>
          <hr className="border border-gray-300" />
          <div className="flex gap-4 justify-between">
            <input
              className="rounded-lg border border-gray-300 w-1/2 px-2 py-2"
              type="text"
              value={data.firstname}
              onChange={(event) =>
                setData({ ...data, firstname: event.target.value })
              }
              placeholder="Firstname"
              required
            />

            <input
              className="rounded-lg  border border-gray-300 w-1/2 px-2 py-2"
              type="text"
              value={data.surname}
              onChange={(event) =>
                setData({ ...data, surname: event.target.value })
              }
              placeholder="Surname"
              required
            />
          </div>

          <input
            className="rounded-lg  border border-gray-300 p-2"
            type="number"
            value={data.phone}
            onChange={(event) => setData({ ...data, phone: event.target.value })}
            placeholder="Number"
            required
          />
          <p className="text-sm text-red-600">{validatephone}</p>

          <input
            className="rounded-lg  border border-gray-300 p-2"
            type="text"
            value={data.Address}
            onChange={(event) =>
              setData({ ...data, Address: event.target.value })
            }
            placeholder="Address"
            required
          />

          <input
            className="rounded-lg  border border-gray-300 p-2"
            type="email"
            value={data.email}
            onChange={(event) => setData({ ...data, email: event.target.value })}
            placeholder="Email"
            required
          />
          <div className="flex gap-4 justify-between">
            <input
              className="rounded-lg  border border-gray-300 p-2 w-1/2"
              type="password"
              value={data.CRPassword}
              onChange={(event) =>
                setData({ ...data, CRPassword: event.target.value })
              }
              placeholder="Create Password"
              required
            />
            <input
              className="rounded-lg  border border-gray-300 p-2 w-1/2"
              type="password"
              value={data.COPassword}
              onChange={(event) =>
                setData({ ...data, COPassword: event.target.value })
              }
              placeholder="Confirm Password"
              required
            />
          </div>
          <p className="text-sm text-red-600">{validatepassword}</p>
          <div className="text-center mb-2 mt-4">
            <button
              className="px-12 py-1 bg-blue-500 text-white font-bold rounded-lg text-xl hover:bg-blue-600"
              onClick={handleClick}
            >
              Sign Up
            </button>
          </div>
          <hr className="border border-gray-300" />
          <button className="hover:underline" onClick={props.login}>Already have account ? Login</button>
        </div>
      </div>
    );
  };

  export default Signup;
