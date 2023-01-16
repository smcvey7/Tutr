import React from "react";

function UserTile({user}){

  return(
    <div className="tile">
      <h3 id={user.position === "student" ? "studentPosition" : "tutorPosition"}>{user.position}</h3>
      <h3>{user.name}</h3>
      <div>
      {user.position === "student" ? 
        <div>
          <h4>({user.username})</h4>
          <p>Course: {user.current_course}</p>
          <p>Lesson: {user.current_lesson} </p>
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