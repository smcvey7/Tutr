import React, {useState} from "react";

function CreateLessonForm({userList, handleAddLesson}){

  const today = new Date()

  const [newLessonData, setNewLessonData] = useState({
    date: "",
    time: "",
    subject: "",
    info: 1,
    student_id: "0",
    tutor_id: "0"
  })


  function handleChange(e){
    const updatedLesson = {
      ...newLessonData,
      [e.target.name]: e.target.value
    }

    setNewLessonData(updatedLesson)
  }

  function handleSubmit(e){
    e.preventDefault()

    const submission = {
      ...newLessonData
    }

    fetch(`http://localhost:9292/create-lesson`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(submission)
    })
    .then(res=>res.json())
    .then(data=>{
      handleAddLesson(data)
      console.log("lesson posted", data)
    })

  }

  return(
    <form className="flexContainer" id="newLessonForm" onSubmit={handleSubmit}>
      <h2>Create New Lesson</h2>
      <select name="tutor_id" value={newLessonData.tutor_id} onChange={handleChange}>
        <option value="0" disabled >tutor</option>
        {userList ? userList[0] :  null}
      </select>
      <select name="student_id" value={newLessonData.student_id} onChange={handleChange}>
        <option value="0" disabled >student</option>
        {userList ? userList[1] :  null}
      </select>
      <label>course:
        <input name="subject" value={newLessonData.subject} onChange={handleChange} ></input>
      </label>
      <label>lesson:
        <input type="number" min="1" name="info" value={newLessonData.info} onChange={handleChange} ></input>
      </label>
      <label>date:
        <input type="date" name="date" value={newLessonData.date} onChange={handleChange} ></input>
      </label>
      <label>time:
        <input type="time" name="time" value={newLessonData.time} onChange={handleChange} ></input>
      </label>
      <input type="submit" value="add lesson"></input>
    </form>
  )
}

export default CreateLessonForm