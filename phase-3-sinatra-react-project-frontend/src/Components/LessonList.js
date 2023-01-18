import React from "react";
import LessonTile from "./LessonTile";

function LessonList({tutor, setShowLessons}){

  function hideLessons(){
    setShowLessons(false)
  }

  return(
    <div>
      <button onClick={hideLessons}>hide</button>
      <h2>Lessons</h2>
    </div>
  )
}


export default LessonList