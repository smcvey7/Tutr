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
    <div className="flexContainer userTileNew">
      <h3 className={user.position ==="student" ? "tileLabelStudent" : "tileLabelTutor"}>{user.position}</h3>
      {user.position ==="student" ?
        <div id="tileMainStudent">
          <div>
            <h3 className="noMargin">{user.name}</h3>
            <h4>@{user.username}</h4>
          </div>
          <div id="courseList">
            <strong>courses:</strong>
            <ul>{courses}</ul>
          </div>
          <button id="lessonsButton" onClick={revealLessons}>Lessons</button>
        </div> :
        <div id="tileMainTutor">
          <h3>@{user.username}</h3>
          <img className="profilePicNew" src={user.image_url}></img>
          <div id="courseList">
            <strong>courses:</strong>
            <p id="coursesOffered"><strong>Courses offered:</strong><br/>{user.courses}</p>
          </div>
          <button id="lessonsButton" onClick={revealLessons}>Lessons</button>
        </div> }  
    </div>
  )
}

export default UserTile

