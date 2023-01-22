import React, {useState, useEffect} from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import CreateNewLesson from '../CreateNewLesson';

function App() {

  const [currentUser, setCurrentUser] = useState({
    username: null,
    password: null
  })

  const [revealCreateLesson, setRevealCreateLesson] = useState(false)


  const [queryResults, setQueryResults] = useState(null)

  const [filteredResults, setFilteredResults] = useState(queryResults)

  function handleQueryResults(data){
    setQueryResults(data)
  }

  function handleFilter(results){
    setFilteredResults(results)
  }

  function handleUpdatedLesson(updatedLesson){
    const filteredResults = queryResults.map((user)=>{
      return {
        ...user,
        lessons: user.lessons.map((lesson)=>{
          if (lesson.id === updatedLesson.id){
            return updatedLesson
          }else{
             return lesson
            }
        })
      }
    })

    setQueryResults(filteredResults)
  }

  function handleDeletedLesson(id){
    const filteredResults = queryResults.map((user)=>{
      return {
        ...user,
        lessons: user.lessons.filter((lesson)=>lesson.id !== id)
      }
    })

    setQueryResults(filteredResults)
  }

  function handleAddLesson(lessonInfo){
    queryResults.map(user=>{
      if (user.position === "tutor" && user.id ===lessonInfo.tutor_id){
        return {
          ...user,
          lessons: [
            ...user.lessons,
            lessonInfo
          ]
        }
      }else if (user.position === "student" && user.id ===lessonInfo.student_id) {
        return {
          ...user,
          lessons: [
            ...user.lessons,
            lessonInfo
          ]
        }
      }else return user
    })
  }

  return (
    <div className="App">
      <Header currentUser = {currentUser.username} setCurrentUser = {setCurrentUser} />
      {currentUser.username ? <div>
        <div>
          <div id='searchOrCreate'>
            <Search handleQueryResults={handleQueryResults}/>
            <h2>OR</h2>
            <CreateNewLesson handleAddLesson={handleAddLesson} />
          </div>
        </div>
        <Results results={queryResults} handleFilter={handleFilter} filteredResults={filteredResults} currentUser={currentUser} handleUpdatedLesson={handleUpdatedLesson} handleDeletedLesson={handleDeletedLesson}/>
      </div> : <p><em>Welcome to TUTR! Please log in above to get started.</em></p>}
    </div>
  );
}

export default App;
