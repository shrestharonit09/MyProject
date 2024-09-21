import React, { useEffect, useState } from "react";
import RS from "../Image/RS.png";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showsidebar, setShowsidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebar = () => {
    setShowsidebar(!showsidebar);
  };
  const Userdata = JSON.parse(localStorage.getItem("users"))||[];
  console.log("datatatata",Userdata)
  return (
    <div>
      <div
        className={`fixed top-0 right-0 z-50 transform ${
          showsidebar ? "-translation-x-0" : "translate-x-full"
        } transition-transform duration-1000 ease-in-out`}
      >
        {width <= 850 && <Sidebar closeSidebar={handleSidebar} />}
      </div>

      <div className="border border-gray-300 bg-gray-100 px-12 py-3 shadow-lg">
        <div className="flex justify-between">
          <div>
            <img
              className="rounded-full"
              src={RS}
              height={40}
              width={40}
              alt="RonitShresthaLogo"
            />
          </div>
          {width > 850 ? (
            <div className="w-1/2">
              <div className="flex justify-around text-xl text-gray-500 font-semibold">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Home{" "}
                </NavLink>
                <NavLink
                  to="/crud"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  ID Card{" "}
                </NavLink>
                <NavLink
                  to="/notebook"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Notebook{" "}
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  About{" "}
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Contact{" "}
                </NavLink>
              </div>
            </div>
          ) : (
            ""
          )}
          <div>
            {Userdata && (
              <h1 className="flex gap-1">
                {Userdata.fname}
                {Userdata.lname}
              </h1>
            )}
            <div className={`${width > 850 ? " " : "flex gap-4"}`}>
              <IoPersonCircleSharp size={40} onClick={props.loginshow} />
              {width <= 850 && (
                <HiOutlineBars3
                  size={30}
                  className="mt-1"
                  onClick={handleSidebar}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
