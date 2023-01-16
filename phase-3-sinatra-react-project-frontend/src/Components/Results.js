import React, {useState} from "react";
import UserTile from "./UserTile";

function Results({results}){

  const [filteredResults, setFilteredResults] = useState(null)

  const [checks, setChecks] = useState({
    all: true,
    student: true,
    tutor: true
  })

  function changeFilter(){
    
  }

  function checkAll(){
    checks.all ?
      setChecks({
        all: false,
        student: false,
        tutor: false
      }) :
      setChecks({
        all: true,
        student: true,
        tutor: true
      })
  }

  function onCheckChange(e){
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
      <h2>Results</h2>
        <input checked={checks.all} onChange={checkAll} type="checkbox"  />all
        <input checked={checks.student} name="student" onChange={onCheckChange} type="checkbox"/>students
        <input checked={checks.tutor} name="tutor" onChange={onCheckChange} type="checkbox"/>tutors
        <br/>
      <div className="flexContainer">
        {results === null ? <></> :results.map(user=><UserTile key={user.username} user = {user}/>)}
      </div>
    </div>
  )
}

export default Results