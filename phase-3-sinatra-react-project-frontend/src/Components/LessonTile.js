import React, {useState} from "react";
import LessonEditForm from "./LessonEditForm";

function LessonTile({lesson, handleUpdatedLesson, handleDeletedLesson}){

  const [isEditing, setIsEditing] = useState(false)

  function revealEdit(state){
    setIsEditing(state)
  }

  return(
    <div className="lessonTile">
      <strong>tutor: </strong>{lesson.tutor.name}<br/>
      <strong>student: </strong>{lesson.student.username}<br/>
      <strong>course: </strong>{lesson.subject}<br/>
      <LessonEditForm isEditing={isEditing} lesson={lesson} revealEdit={revealEdit} handleUpdatedLesson={handleUpdatedLesson} handleDeletedLesson={handleDeletedLesson} />
    </div>
  )
}

export default LessonTile