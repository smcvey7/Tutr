import React, {useState} from "react";

function LessonEditForm({revealEdit, isEditing, lesson}){

  const [lessonInfo, setLessonInfo]=useState({
    info: lesson.info,
    time: lesson.time,
    date: lesson.date,
    preLesson: lesson.pre_lesson,
    postLesson: lesson.post_lesson
  })

  function handleChange(e){
    const newInfo = {
      ...lessonInfo,
      [e.target.name]: e.target.value
    }
    console.log(lessonInfo)
    setLessonInfo(newInfo)
  }

  return(
    <form>
        <strong>lesson: </strong>{isEditing ? <input type="number" value={lessonInfo.info} name="info" onChange={handleChange}></input> : <>{lessonInfo.info}</>}<br/>
        <strong>appointment: </strong>{isEditing ? <input type="date" value={lessonInfo.date} name="date" onChange={handleChange}></input> : <>{lessonInfo.date}</>}<br/>
        <strong>appointment: </strong>{isEditing ? <input type="time" value={lessonInfo.time} name="time" onChange={handleChange}></input> : <>{lessonInfo.time}</>}<br/>
        <strong>pre-lesson: </strong>{isEditing ? <input value={lessonInfo.preLesson} name="preLesson" onChange={handleChange}></input> : <>{lessonInfo.preLesson}</>}<br/>
        <strong>post-lesson: </strong>{isEditing ? <input value={lessonInfo.postLesson} name="postLesson" onChange={handleChange}></input> : <>{lessonInfo.postLesson}</>}<br/>
        {isEditing ? 
          <div>
            <input type="submit"/><button>cancel</button> 
          </div>:
          <button onClick={()=>revealEdit(true)}>edit lesson</button>}
      </form>
  )
}

export default LessonEditForm