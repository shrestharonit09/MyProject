import React, { createContext, useState } from "react";
const globalContext = createContext();

const NoteState = (props) => {
  const [isLogin, setIslogin] = useState(null);
  const[dropdown, setDropdown]=useState(false);
  
  const handleIslogin = (login) => {
    setIslogin(login);
  };

  const handleDropdown=()=>{
    setDropdown(!dropdown);
  }

  const handleallcompdropdown=(drop)=>{
    setDropdown(drop);
  }
  return (
    <div>
      <globalContext.Provider value={{ isLogin, handleIslogin,dropdown,handleDropdown,handleallcompdropdown }}>
        {props.children}
      </globalContext.Provider>
    </div>
  );
};

export { NoteState, globalContext };
