import React from "react";
import Login from "./Login";

function Header({currentUser, setCurrentUser}){

  function onLogout(){
    setCurrentUser({
      username: null,
      password: null
    })
  }

  return(
    <div className="flexContainer" id="header">
      <h1>TUTR</h1>
      <div id="login">{currentUser ? <><strong>Welcome {currentUser}</strong><br/><em className="hoverUnderline" onClick={onLogout}>logout</em></> : <Login setCurrentUser={setCurrentUser}/>}</div>
    </div>
  )
}

export default Header