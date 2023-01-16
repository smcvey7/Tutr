import React, {useState} from "react";

function Login({setCurrentUser}){

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    userType: "student"
  })

  function handleChange(e){
    const updatedInfo = {
      ...userInfo,
      [e.target.name]: e.target.value
    }
    setUserInfo(updatedInfo)
  }

  function handleLogin(){
    fetch(`http://localhost:9292/${userInfo.userType}s/user-search/${userInfo.username}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("data:", data)
      checkCredentials(data) ? setCurrentUser(data) : alert("User info incorrect. Please try again.")
    })
    .catch(alert("Username doesn't exist. Please try again."))
  }

  function checkCredentials(data){
    return data.password === userInfo.password
  }

  function onSubmitLogin(e){
    e.preventDefault()
    handleLogin()
  }

  return(
    <form onSubmit={onSubmitLogin}>
      username<input autoComplete="username" name = "username" value = {userInfo.username} onChange={handleChange}></input><br/>
      password<input autoComplete="password" type="password" value = {userInfo.password} name = "password" onChange={handleChange} ></input><br/>
      <select name = "userType" value = {userInfo.userType} onChange={handleChange}>
        <option>student</option>
        <option>tutor</option>
      </select>
      <input type="submit"/>
    </form>
  )
}

export default Login