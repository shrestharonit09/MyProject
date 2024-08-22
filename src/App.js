import React, { useState } from "react";
import Login from "./component/Login";
import Signup from "./component/Signup";

const App = () => {
  const [loginxa, setLoginxa] = useState(true);
  const handleLogin = () => {
    setLoginxa(true);
  };
  const handleSignin = () => {
    setLoginxa(false);
  };
  return (
    <div>
      {loginxa ? (
        <Login signup={handleSignin} />
      ) : (
        <Signup login={handleLogin} />
      )}
    </div>
  );
};

export default App;
