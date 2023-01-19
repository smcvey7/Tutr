import React, {useState} from "react";

function UserTile({user, setShowLessons, currentUser, setLessonsInfo}){

  const courses = currentUser.username ? user.lessons.map((lesson)=>{
    return <li key={lesson.subject}>{lesson.subject}</li>
  }) : null

  function revealLessons(){
    setShowLessons(true)
    setLessonsInfo(user.lessons)
  }

  return(
    <div className="tile">
      <h3 className={user.position === "student" ? "studentPosition" : "tutorPosition"}>{user.position}</h3>
      <h3>{user.name}</h3>
      <div>
      {user.position === "student" ? 
        <div>
          <h4>({user.username})</h4>
          <p>Courses: </p>
          <ul>{courses}</ul>
        </div> : 
        <div>
          <img className="profilePic" src={user.image_url}></img>
          <p>Courses offered: {user.courses}</p>
          <button>Book a lesson!</button>
        </div>
      }
      <button onClick={revealLessons}>Lessons</button>

      </div>
      
    </div>
  )
}

export default UserTile