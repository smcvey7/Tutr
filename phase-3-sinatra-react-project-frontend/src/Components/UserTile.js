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
      <div>
      {user.position === "student" ? 
        <div className="studentTile">
          <h3>{user.name}</h3>
          <h4>({user.username})</h4>
          <strong>Courses: </strong>
          <ul>{courses}</ul>
          <button onClick={revealLessons}>Lessons</button>
        </div> : 
        <div className=" flexContainer tutorTile">
          <img className="profilePic" src={user.image_url}></img>
          <div>
            <h3>{user.name}</h3>
            <strong>Courses offered: {user.courses}</strong>
            <button onClick={revealLessons}>Lessons</button>
          </div>
        </div>
      }
      </div>
      
    </div>
  )
}

export default UserTile