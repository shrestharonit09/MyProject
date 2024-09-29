import React, { createContext, useState } from "react";
const globalContext = createContext();

const NoteState = (props) => {
  const [isLogin, setIslogin] = useState(null);

  const handleIslogin = (login) => {
    setIslogin(login);
  };
  return (
    <div>
      <globalContext.Provider value={{ isLogin, handleIslogin }}>
        {props.children}
      </globalContext.Provider>
    </div>
  );
};

export { NoteState, globalContext };
