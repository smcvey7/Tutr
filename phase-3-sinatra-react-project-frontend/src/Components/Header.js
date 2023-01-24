import React from "react";
import Login from "./Login";

function Header({currentUser, setCurrentUser, onLogout}){

  return(
    <div className="flexContainer" id="header">
      <h1 id="title">TUTR+</h1>
      <div id="login">{currentUser ? <><strong>Welcome {currentUser}</strong><br/><em className="hoverUnderline" onClick={onLogout}>logout</em></> : <Login setCurrentUser={setCurrentUser}/>}</div>
    </div>
  )
}

export default Header