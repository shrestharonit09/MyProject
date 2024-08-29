import React from "react";
import Auth from "./component/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Crudoperation from "./component/Crudoperation";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Auth/>}></Route>
          <Route path="/crud" element={<Crudoperation/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
