import React from "react";

function Login({setCurrentUser}){

  return(
    <form>
      username<input></input><br/>
      password<input type="password" ></input>
      <select>
        <option>student</option>
        <option>tutor</option>
      </select>
    </form>
  )
}

export default Login