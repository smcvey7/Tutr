import React, {useState, useEffect} from "react";

function CreateNewLesson(){

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
      
      return <option key={tutor.username} value={tutor.id}>{tutor.username}</option>
    })
    const students = data.student_list.map((student)=>{
       return <option key={student.username} value={student.id}>{student.username}</option>
    })
    setUserList([tutors, students])
  })
}, [])

  return(
    <form>
      <h2>Create New Lesson</h2>
      <select>
        <option value="" disabled selected>tutor</option>
        {userList ? userList[0] :  null}
      </select><br/>
      <select>
        <option value="" disabled selected>student</option>
        {userList ? userList[1] :  null}
      </select><br/>
      
    </form>
  )
}

export default CreateNewLesson