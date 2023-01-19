import React from "react";
import LessonTile from "./LessonTile";

function LessonList({lessonsInfo, setShowLessons}){

  const lessonTiles = lessonsInfo ? lessonsInfo.map((lesson)=><LessonTile key={lesson.id} lesson={lesson}/>) : null

  function hideLessons(){
    setShowLessons(false)
  }

  return(
    <div>
      <button onClick={hideLessons}>hide</button>
      <h2>Lessons</h2>
      {lessonTiles}
    </div>
  )
}


export default LessonList