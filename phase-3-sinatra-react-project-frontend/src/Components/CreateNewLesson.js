import React, {useState, useEffect} from "react";

function CreateNewLesson({handleAddLesson}){

  const [userList, setUserList]= useState(null)

  const [newLessonData, setNewLessonData] = useState({
    date: "",
    time: "",
    subject: "",
    info: 1,
    student_id: "0",
    tutor_id: "0"
  })

useEffect(()=>{
  fetch(`http://localhost:9292/student-tutor-list`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
  .then(res=>res.json())
  .then(data=>{
    const tutors = data.tutor_list.map((tutor)=>{
      
      return <option key={tutor.username} value={tutor.id}>{tutor.username} ({tutor.courses})</option>
    })
    const students = data.student_list.map((student)=>{
       return <option key={student.username} value={student.id}>{student.username}</option>
    })
    setUserList([tutors, students])
  })
}, [])

function handleChange(e){
  const updatedLesson = {
    ...newLessonData,
    [e.target.name]: e.target.value
  }

  setNewLessonData(updatedLesson)
}

function resetForm(){
  setNewLessonData({
    date: "",
    time: "",
    subject: "",
    info: 1,
    student_id: "0",
    tutor_id: "0"
  })
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

  })
  resetForm()
  alert("New lesson created")
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
        <input name="subject" placeholder="course name" value={newLessonData.subject} onChange={handleChange} ></input>
      </label>
      <label id="numberInput">lesson:
        <input type="number" min="1" name="info" value={newLessonData.info} onChange={handleChange} ></input>
      </label>
      <label>date:
        <input type="date" name="date" value={newLessonData.date} onChange={handleChange} ></input>
      </label>
      <label>time:
        <input type="time" name="time" value={newLessonData.time} onChange={handleChange} ></input>
      </label>
      <input id="addLessonSubmit" type="submit" value="add lesson"></input>
    </form>
  )
}

export default CreateNewLesson