import React, { useState } from "react";
import LessonTile from "./LessonTile";

function LessonList({lessonsInfo, setShowLessons, handleUpdatedLesson, handleDeletedLesson}){

  const lessonTiles = lessonsInfo ? lessonsInfo.map((lesson)=><LessonTile key={lesson.id} lesson={lesson} handleUpdatedLesson={handleUpdatedLesson} handleDeletedLesson={handleDeletedLesson} />) : null
  
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