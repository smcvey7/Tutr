import React from "react";

function UserTile({user, setShowLessons, currentUser, setLessonsInfo}){

  const courses = currentUser.username ? user.lessons.map((lesson)=>{
    return <li key={lesson.subject+lesson.info}>{lesson.subject}-{lesson.info}</li>
  }) : null

  function revealLessons(){
    setShowLessons(true)
    setLessonsInfo(user.lessons)
  }

  return(
    <div className={user.position === "student" ? "studentTile" : "tutorTile"}>
      <h3 className={user.position === "student" ? "studentPosition" : "tutorPosition"}>{user.position}</h3>
      {user.position === "student" ? 
        <div>
          <h3 className="noMargin">{user.name}</h3>
          <h4>@{user.username}</h4>
          <strong>Courses: </strong>
          <ul>{courses}</ul>
        </div> : 
        <div className="tutorSubTile">
          <img className="profilePic" src={user.image_url}></img>
          <div>
            <h3>@{user.name}</h3>
            <p id="coursesOffered"><strong>Courses offered:</strong><br/>
            {user.courses}</p>
          </div>
        </div>
      }
      <button id="lessonsButton" onClick={revealLessons}>Lessons</button>
    </div>
  )
}

export default UserTile