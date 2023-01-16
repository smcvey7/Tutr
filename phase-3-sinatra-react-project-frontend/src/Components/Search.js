import React, {useState} from "react";

function Search(){
  const [checks, setChecks] = useState({
    all: true,
    students: true,
    tutors: true,
    lessons: true
  })

  function checkAll(){
    checks.all ?
      setChecks({
        all: false,
        students: false,
        tutors: false,
        lessons: false
      }) :
      setChecks({
        all: true,
        students: true,
        tutors: true,
        lessons: true
      })
  }

  function onCheckChange(e){
    console.log(e)
    checks[e.target.name] ? setChecks(
      {
        ...checks,
        all: false,
        [e.target.name]: !checks[e.target.name]
      }) :
    setChecks(
      {
        ...checks,
        [e.target.name]: !checks[e.target.name]
      })
  }

  return(
    <div>
      <h2>Search</h2>
      <form>
        <input/><br/>
        <input checked={checks.all} onChange={checkAll} type="checkbox"  />all
        <input checked={checks.students} name="students" onChange={onCheckChange} type="checkbox"/>students
        <input checked={checks.tutors} name="tutors" onChange={onCheckChange} type="checkbox"/>tutors
        <input checked={checks.lessons} name="lessons" onChange={onCheckChange} type="checkbox"/>lessons

      </form>
    </div>
  )
}

export default Search