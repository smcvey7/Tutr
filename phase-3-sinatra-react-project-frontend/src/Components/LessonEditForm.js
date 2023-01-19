import React, {useState} from "react";

function LessonEditForm({revealEdit, isEditing, lesson}){

  const [lessonInfo, setLessonInfo]=useState({
    lesson: lesson.info,
    appointment: lesson.time,
    preLesson: lesson.pre_lesson,
    postLesson: lesson.post_lesson
  })

  return(
    <form>
        <strong>Lesson: </strong>{isEditing ? <input type="number"></input> : <>{lesson.info}</>}<br/>
        <strong>appointment: </strong>{isEditing ? <input type="datetime-local"></input> : <>{lesson.time}</>}<br/>
        <strong>pre-lesson: </strong>{isEditing ? <input></input> : <>{lesson.before_lesson}</>}<br/>
        <strong>post-lesson: </strong>{isEditing ? <input></input> : <>{lesson.after_lesson}</>}<br/>
        {isEditing ? 
          <div>
            <input type="submit"/><button>cancel</button> 
          </div>:
          <button onClick={()=>revealEdit(true)}>edit lesson</button>}
      </form>
  )
}

export default LessonEditForm