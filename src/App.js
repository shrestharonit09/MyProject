import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Crudoperation from "./component/Crudoperation";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Auth from "./component/Auth";
import Notebook from "./component/Notebook";
import About from "./component/About";
import Contact from "./component/Contact";

const App = () => {
  const [showlogin, setShowlogin] = useState(false);
  return (
    <div>
      <Router>
        {showlogin ? (
          <Auth apphome={()=>setShowlogin(false)}/>
        ) : (
          <div>
            <Navbar
              loginshow={() => {
                setShowlogin(true);
              }}
            />
            <Routes>
              <Route path="/crud" element={<Crudoperation />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/notebook" element={<Notebook/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
          </div>
        )}
      </Router>
    </div>
  );
};

export default App;
