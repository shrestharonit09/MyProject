import React,{useContext} from "react";
import { Routes, Route } from "react-router-dom";
import Crudoperation from "./Crudoperation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { globalContext } from "../ContextAPI/NoteState";
import News from "./News";

const Routing = () => {
    const {handleallcompdropdown}=useContext(globalContext)
  return (
    // to close the dropdown from clicking any part of window, routing app.js ma banauda globalContext use garna milena so eta banako..
    <div onClick={()=>handleallcompdropdown(false)}>  
    <Routes>
      <Route path="/crud" element={<Crudoperation />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/news" element={<News/>}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </div>
  );
};

export default Routing;
