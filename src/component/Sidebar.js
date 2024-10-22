import React from "react";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="flex flex-col gap-4 text-xl text-white font-bold bg-blue-600 px-6 py-4">
      <button
        className="flex justify-end hover:text-red-600"
        onClick={props.closeSidebar}
      >
        <RxCross1 />
      </button>
      <NavLink
        onClick={props.closeSidebar}
        to="/"
        className="hover:text-sky-300"
      >
        Home{" "}
      </NavLink>
      <NavLink
        onClick={props.closeSidebar}
        to="/crud"
        className="hover:text-sky-300"
      >
        ID Card{" "}
      </NavLink>
      <NavLink
        onClick={props.closeSidebar}
        to="/news"
        className="hover:text-sky-300"
      >
        News
      </NavLink>
      <NavLink
        onClick={props.closeSidebar}
        to="/about"
        className="hover:text-sky-300"
      >
        About{" "}
      </NavLink>
      <NavLink
        onClick={props.closeSidebar}
        to="/contact"
        className="hover:text-sky-300"
      >
        Contact{" "}
      </NavLink>
    </div>
  );
};

export default Sidebar;
