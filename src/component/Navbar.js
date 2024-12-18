import React, { useEffect, useState, useContext } from "react";
import { globalContext } from "../ContextAPI/NoteState";
import RS from "../Image/RS.png";
import Ronit from "../Image/ronit.png";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";

const Navbar = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showsidebar, setShowsidebar] = useState(false);
 
  const { isLogin,handleIslogin,dropdown,handleDropdown} = useContext(globalContext);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebar = () => {
    setShowsidebar(!showsidebar);
  };
  const Userdata = JSON.parse(localStorage.getItem("login"));

  
  const handleLogout=()=>{
    handleIslogin(false)
  }

  return (
    <div>
      <div
        className={`fixed top-0 right-0 z-50 transform ${
          showsidebar ? "-translation-x-0" : "translate-x-full"
        } transition-transform duration-1000 ease-in-out`}
      >
        {width < 1050 && <Sidebar closeSidebar={handleSidebar} />}
      </div>

      <div className="fixed w-full top-0 border border-gray-300 bg-gray-200 px-12 py-3 shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <img
              className="rounded-full"
              src={RS}
              height={40}
              width={40}
              alt="RonitShresthaLogo"
            />
          </div>
          {width > 1050 ? (
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
                  to="/news"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  News
                </NavLink>
                <NavLink
                  to="/weather"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Weather
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
          <div className="flex gap-2 items-center">
            {isLogin ? (
              <div>
                {Userdata && (
                  <div className="flex gap-2 py-1 text-lg">
                    <h1>{Userdata.fname}</h1>
                    <h1> {Userdata.lname}</h1>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2 py-1 text-lg">
                <h1>Guest</h1>
              </div>
            )}

            <div className={`${width > 1050 ? " " : "flex gap-4"}`}>
              {isLogin ? (
                <div className="relative" onClick={handleDropdown}>
                  <button className="hover:opacity-90 active:scale-90 rounded-full transition duration-500 ease-in-out">
                  <img
                    className="rounded-full"
                    src={Ronit}
                    height={40}
                    width={40}
                    alt="RonitLogo"
                  />
                  </button>
                  <button className="absolute bottom-0 right-0 rounded-full bg-white text-md">
                    <IoMdArrowDropdown />
                  </button>
                  {dropdown &&
                  <div className="absolute right-0 mt-3 shadow-lg border border-gray-300 px-1 py-4 bg-white rounded-lg flex flex-col gap-4 w-48">
                    <button className="hover:bg-gray-300 rounded-lg px-2 py-1" onClick={handleLogout}>
                      <div className="flex gap-4 items-center">
                        <div className="rounded-full border border-gray-300 p-2 bg-gray-200">
                          <RiLogoutBoxRLine className="text-black text-xl" />
                        </div>
                        <h1 className="text-lg font-semibold">Log Out</h1>
                      </div>
                    </button>
                    <button className="hover:bg-gray-300 rounded-lg px-2 py-1">
                      <div className="flex gap-4 items-center">
                        <div className="rounded-full border border-gray-300 p-2 bg-gray-200">
                          <IoSettingsSharp className="text-black text-xl" />
                        </div>
                        <h1 className="text-lg font-semibold">Setting</h1>
                      </div>
                    </button>
                  </div>}
                </div>
              ) : (
                <IoPersonCircleSharp size={40} onClick={props.loginshow} />
              )}

              {width <=1050 && (
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
