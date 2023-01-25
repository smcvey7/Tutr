import React, {useState} from "react";

function LessonEditForm({revealEdit, isEditing, lesson, handleUpdatedLesson, handleDeletedLesson}){

  const [lessonInfo, setLessonInfo]=useState({
    info: lesson.info,
    time: lesson.time,
    date: lesson.date
  })

  function handleChange(e){
    const newInfo = {
      ...lessonInfo,
      [e.target.name]: e.target.value
    }
    setLessonInfo(newInfo)
  }

  function handlesubmit(e){
  
    e.preventDefault()

    fetch(`http://localhost:9292/edit-lesson/${lesson.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(lessonInfo)
    })
    .then((res)=>res.json())
    .then((updatedLesson)=>{
      
      handleUpdatedLesson(updatedLesson)
    })

    revealEdit(false)
  }

  function handleDelete(){
    fetch(`http://localhost:9292/delete-lesson/${lesson.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
    .then(()=>{
      handleDeletedLesson(lesson.id)
    })
  }

  return(
    <form onSubmit={handlesubmit}>
        <strong>lesson: </strong>{isEditing ? <input type="number" value={lessonInfo.info} name="info" onChange={handleChange}></input> : <>{lessonInfo.info}</>}<br/>
        <strong>date: </strong><br/>{isEditing ? <input type="date" value={lessonInfo.date} name="date" onChange={handleChange}></input> : <>{lessonInfo.date}</>}<br/>
        <strong>time: </strong><br/>{isEditing ? <input type="time" value={lessonInfo.time} name="time" onChange={handleChange}></input> : <>{lessonInfo.time}</>}<br/>
        {isEditing ? 
          <div id="editButtons">
            <input value="submit" type="submit"/><button onClick={()=>revealEdit(false)}>cancel</button><button onClick={handleDelete}>delete</button>
          </div>:
          <button onClick={()=>revealEdit(true)}>edit lesson</button>}
      </form>
  )
}

export default LessonEditForm