import React, { useState} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./component/Navbar";
import Auth from "./component/Auth";
import { NoteState} from "./ContextAPI/NoteState";
import Routing from "./component/Routing";


const App = () => {
  const [showlogin, setShowlogin] = useState(false);
  return (
    <NoteState>
      <div>
        <Router>
          {showlogin ? (
            <Auth apphome={() => setShowlogin(false)} />
          ) : (
            <div>
              <Navbar
                loginshow={() => {
                  setShowlogin(true);
                }}
              />
              <div className="mt-[68px]">
                <Routing/>
              </div>
            </div>
          )}
        </Router>
      </div>
    </NoteState>
  );
};

export default App;
