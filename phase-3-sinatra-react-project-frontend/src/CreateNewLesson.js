import React, {useState, useEffect} from "react";
import CreateLessonForm from "./Components/CreateLessonForm";

function CreateNewLesson({handleAddLesson}){

  const [userList, setUserList]= useState(null)
  

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

  return(
    <CreateLessonForm userList={userList} handleAddLesson={handleAddLesson} />
  )
}

export default CreateNewLesson