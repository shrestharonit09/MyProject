import React, { useState } from "react";

const Reset = (props) => {
  const [resetdata, setResetdata] = useState({
    phone: "",
    Newpassword: "",
    Confirmpassword: "",
  });
  console.log(resetdata);
  const handlePasswordreset = () => {
    const Userdata = JSON.parse(localStorage.getItem("users"));
    if (Userdata) {
      if (resetdata.phone === Userdata.phone) {
        if (resetdata.Newpassword === resetdata.Confirmpassword) {
          localStorage.setItem(
            "users",
            JSON.stringify({
              ...Userdata,
              password: resetdata.Newpassword,
            })
          );
          alert("password has been reset successfully")
          props.loginreset()
        } else {
          alert("password didnt matched");
        }
      } else {
        alert("phone number is incorrect");
      }
    } else {
      alert("user not found");
    }
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-1/4 shadow-lg bg-gray-200 rounded-lg">
        <div className="flex flex-col p-4 gap-2">
          <h1 className="text-3xl text-center font-semibold">Reset </h1>
          <label className="text-gray-600" htmlFor="phone">
            phone number
          </label>
          <input
            type="number"
            className="rounded-lg h-8"
            value={resetdata.phone}
            onChange={(event) =>
              setResetdata({ ...resetdata, phone: event.target.value })
            }
            required
          />
          <label className="text-gray-600" htmlFor="Password">
            New Password
          </label>
          <input
            className="rounded-lg h-8"
            type="password"
            value={resetdata.Newpassword}
            onChange={(event) =>
              setResetdata({ ...resetdata, Newpassword: event.target.value })
            }
            required
          />
          <label className="text-gray-600" htmlFor="Password">
            Confirm Password
          </label>
          <input
            className="rounded-lg h-8"
            type="password"
            value={resetdata.Confirmpassword}
            onChange={(event) =>
              setResetdata({
                ...resetdata,
                Confirmpassword: event.target.value,
              })
            }
            required
          />
          <button
            className="bg-blue-500 p-1 rounded-lg text-white"
            onClick={handlePasswordreset}
          >
            Reset Password
          </button>
          <button
            className="bg-blue-500 p-1 rounded-lg text-white"
            onClick={props.loginreset}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reset;
