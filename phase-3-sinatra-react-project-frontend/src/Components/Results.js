import React, {useState, useEffect} from "react";
import LessonList from "./LessonList";
import UserTile from "./UserTile";

function Results({results, currentUser, handleUpdatedLesson, handleDeletedLesson}){

  const [filteredResults, setFilteredResults] = useState(null)

  const [lessonsInfo, setLessonsInfo] = useState(null)

  const [showLessons, setShowLessons]= useState(false)

  useEffect(()=>{
    setFilteredResults(results)
  },[results])

  function filterResults(filter){
    if (results === null) return null
    if (filter === "all"){
      setFilteredResults(results)
    }else{
      const list = results.filter((user)=>{
        return user.position === filter
      })
      setFilteredResults(list)
    }
  }

  return(
    <div>
      <div id="resultsAndFilter">
        <h2 id="resultsTitle">Results</h2>
        <input name="filter" value = "all" type="radio" defaultChecked onChange={()=>{
          filterResults("all")
          }}></input>all

        <input name="filter" value = "tutor" type="radio" onChange={()=>{
          filterResults("tutor")
          }}></input>tutors

        <input name="filter" value = "student" type="radio" onChange={()=>{
          filterResults("student")
          }} ></input>students
      </div>
      <div className="flexContainer" id="resultsSidePanel">
        <div className="flexContainer" id="resultsFlex">
          {filteredResults === null ? null : filteredResults.map(user=><UserTile setLessonsInfo={setLessonsInfo} setShowLessons={setShowLessons} key={user.username} currentUser={currentUser} user = {user}/>)}
        </div>
        {showLessons ? <div id="sidePanelFlex">
          <LessonList lessonsInfo={lessonsInfo} setShowLessons={setShowLessons} handleUpdatedLesson={handleUpdatedLesson} handleDeletedLesson={handleDeletedLesson} />
        </div> : null}
      </div>
    </div>
  )
}

export default Results