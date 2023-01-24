import React, { useState } from "react";
import LessonTile from "./LessonTile";

function LessonList({lessonsInfo, setShowLessons, handleUpdatedLesson, handleDeletedLesson}){

  const lessonTiles = lessonsInfo ? lessonsInfo.map((lesson)=><LessonTile key={lesson.id} lesson={lesson} handleUpdatedLesson={handleUpdatedLesson} handleDeletedLesson={handleDeletedLesson} />) : null

  function hideLessons(){
    setShowLessons(false)
  }

  return(
    <div>
      <h2 id="lessonTitle">Lessons</h2>
      <button id="hide" onClick={hideLessons}>hide</button>
      {lessonTiles}
    </div>
  )
}


export default LessonList