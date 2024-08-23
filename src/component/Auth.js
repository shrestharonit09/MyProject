import React, { useState } from "react";
import Login from "./Login";
import Reset from "./Reset";
import Signup from "./Signup";

const Auth = () => {
  const [loginxa, setLoginxa] = useState(true);
  const [reset, setReset] = useState(true);
  return (
    <div>
       {loginxa ? (
        reset ? (
          <Login signup={()=>setLoginxa(false)} reset={()=>setReset(false)} />
        ) : (
          <Reset loginreset={()=>setReset(true)} />
        )
      ) : (
        <Signup login={()=>setLoginxa(true)} />
      )}
    </div>
  );
};

export default Auth;
