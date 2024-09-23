import React, { useState } from "react";

const Reset = (props) => {
  const [resetdata, setResetdata] = useState({
    phone: "",
    Newpassword: "",
    Confirmpassword: "",
  });

  const handlePasswordreset = () => {
    const Storedata = JSON.parse(localStorage.getItem("users")) || [];
    const UserIndex = Storedata.findIndex(
      (value) => value.phone === resetdata.phone
    );
    if (Storedata) {
      if (UserIndex !== -1) {
        if (resetdata.Newpassword === resetdata.Confirmpassword) {
          const updateData = {
            ...Storedata[UserIndex],
            password: resetdata.Newpassword,
          };
          Storedata[UserIndex] = updateData;
          localStorage.setItem("users", JSON.stringify(Storedata));
          alert("password has been reset successfully");
          props.loginreset();
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
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="w-1/2 md:w-1/3 lg:w-1/4 shadow-lg bg-white rounded-lg border border-gray-300 ">
        <div className="flex flex-col p-4 gap-4">
          <button
            onClick={props.loginreset}
            className="text-md font-semibold text-right text-gray-500 hover:text-red-500"
          >
            X
          </button>
          <h1 className="text-3xl text-center font-semibold">Reset</h1>
          <label className="text-gray-500" htmlFor="Username">
            Number
          </label>
          <input
            type="number"
            className="rounded-lg p-2 border border-gray-300"
            value={resetdata.phone}
            onChange={(event) =>
              setResetdata({ ...resetdata, phone: event.target.value })
            }
            required
          />
          <label className="text-gray-500" htmlFor="Username">
            New Password
          </label>
          <input
            className="rounded-lg p-2 border border-gray-300"
            type="password"
            value={resetdata.Newpassword}
            onChange={(event) =>
              setResetdata({ ...resetdata, Newpassword: event.target.value })
            }
            required
          />
          <label className="text-gray-500" htmlFor="Username">
            Confirm Password
          </label>
          <input
            className="rounded-lg p-2 border border-gray-300"
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
          <div className="flex justify-center">
            <button
              className="bg-blue-500 rounded-lg text-white w-1/2 text-xl font-semibold px-2 py-1 hover:bg-blue-600"
              onClick={handlePasswordreset}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
