import React, {useState, useEffect} from "react";
import LessonList from "./LessonList";
import UserTile from "./UserTile";

function Results({user, results}){

  const [filteredResults, setFilteredResults] = useState(results)
  const [checks, setChecks] = useState({
    all: true,
    student: true,
    tutor: true
  })
  const [showLessons, setShowLessons]= useState(false)

  function changeFilter(){
    if (results === null) return null

    const filtered = results.filter(user=>{
      if (checks.tutor && checks.student){
        return true
      }else if (checks.student){
        return user.position === "student"
      }else return user.postion === "tutor"
    })

    setFilteredResults(filtered)
  }

  useEffect(()=>{
    console.log(filteredResults)
  }, [checks])

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

      changeFilter()
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
      
    changeFilter()
  }

  return(
    <div>
      <h2>Results</h2>
      <input checked={checks.all} onChange={checkAll} type="checkbox"  />all
      <input checked={checks.student} name="student" onChange={onCheckChange} type="checkbox"/>students
      <input checked={checks.tutor} name="tutor" onChange={onCheckChange} type="checkbox"/>tutors
      <br/>
      <div className="flexContainer" id="resultsSidePanel">
        <div className="flexContainer" id="resultsFlex">
          {filteredResults === null ? <></> :filteredResults.map(user=><UserTile key={user.username} user = {user}/>)}
        </div>
        <div id="sidePanelFlex">
          <LessonList tutor={user} />
        </div>
      </div>
    </div>
  )
}

export default Results