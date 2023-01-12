import React from "react";
import Login from "./Login";

function Header({currentUser, setCurrentUser}){

  return(
    <div>
      <h1>TUTR</h1>
      {currentUser ? <><strong>Welcome {currentUser}</strong> <em>logout</em></> : <Login setCurrentUser={setCurrentUser}/>}
    </div>
  )
}

export default Header