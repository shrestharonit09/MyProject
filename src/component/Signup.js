import React, { useState } from "react";

const Signup = (props) => {
  const [data, setData] = useState({
    firstname: "",
    surname: "",
    phone: "",
    Address: "",
    Email: "",
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
      setValidatephone("phone number must be equal to 10 digit");
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
      data.Email
    ) {
      localStorage.setItem(
        "users",
        JSON.stringify({
          email: data.Email,
          password: data.CRPassword,
          phone:data.phone,
        })
      );
      props.login();
    }
    else{
      alert("fields shouldnot be empty")
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-1/4 p-2 gap-2 shadow-lg rounded-lg mb-8 bg-gray-200">
        <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
        <label className="text-lg" htmlFor="Fname">
          First Name:
        </label>
        <input
          className="rounded-lg  border border-gray-300 h-8"
          type="text"
          value={data.firstname}
          onChange={(event) =>
            setData({ ...data, firstname: event.target.value })
          }
          required
        />
        <label className="text-lg " htmlFor="Sname">
          Surname:
        </label>
        <input
          className="rounded-lg  border border-gray-300 h-8"
          type="text"
          value={data.surname}
          onChange={(event) =>
            setData({ ...data, surname: event.target.value })
          }
          required
        />
        <label className="text-lg " htmlFor="Pnum">
          Phone No:
        </label>
        <input
          className="rounded-lg  border border-gray-300 h-8"
          type="number"
          value={data.phone}
          onChange={(event) => setData({ ...data, phone: event.target.value })}
          required
        />
        <p className="text-sm text-red-600">{validatephone}</p>
        <label className="text-lg " htmlFor="Address">
          Address:
        </label>
        <input
          className="rounded-lg  border border-gray-300 h-8"
          type="text"
          value={data.Address}
          onChange={(event) =>
            setData({ ...data, Address: event.target.value })
          }
          required
        />
        <label className="text-lg " htmlFor="email">
          Email:
        </label>
        <input
          className="rounded-lg  border border-gray-300 h-8"
          type="email"
          value={data.Email}
          onChange={(event) => setData({ ...data, Email: event.target.value })}
          required
        />
        <label className="text-lg " htmlFor="CRpassword">
          Create Password:
        </label>
        <input
          className="rounded-lg  border border-gray-300 h-8"
          type="password"
          value={data.CRPassword}
          onChange={(event) =>
            setData({ ...data, CRPassword: event.target.value })
          }
          required
        />
        <label className="text-lg " htmlFor="CPpassword">
          Confirm Password:
        </label>
        <input
          className="rounded-lg  border border-gray-300 h-8"
          type="password"
          value={data.COPassword}
          onChange={(event) =>
            setData({ ...data, COPassword: event.target.value })
          }
          required
        />
        <p className="text-sm text-red-600">{validatepassword}</p>
        <div className="text-center mb-2 mt-4">
          <button
            className="px-4 py-1 bg-blue-500 text-white font-semibold rounded-lg "
            onClick={handleClick}
          >
            Sign Up
          </button>
        </div>
        <button onClick={props.login}>Already have account ? Login</button>
      </div>
    </div>
  );
};

export default Signup;
