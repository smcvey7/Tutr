import React, {useState} from "react";

function UserTile({user, setShowLessons, currentUser}){

  const [userLessons, setUserLessons] = useState(null)

  function revealLessons(){
    setShowLessons(true)
  }

  return(
    <div className="tile">
      <h3 class={user.position === "student" ? "studentPosition" : "tutorPosition"}>{user.position}</h3>
      <h3>{user.name}</h3>
      <div>
      {user.position === "student" ? 
        <div>
          <h4>({user.username})</h4>
          <p>Course: {user.current_course}</p>
          <button onClick={revealLessons}>current lesson</button>
        </div> : 
        <div>
          <img className="profilePic" src={user.image_url}></img>
          <p>Courses offered: {user.courses}</p>
          <button>Book a lesson!</button>
        </div>
      }
      </div>
      
    </div>
  )
}

export default UserTile