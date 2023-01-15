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
    <>
      <div><h1>TUTR</h1></div>
      <div>{currentUser ? <><strong>Welcome {currentUser}</strong><br/><em className="hoverUnderline" onClick={onLogout}>logout</em></> : <Login setCurrentUser={setCurrentUser}/>}</div>
    </>
  )
}

export default Header