import React, {useState} from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import CreateNewLesson from './CreateNewLesson';

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: null,
    password: null
  })

  const [queryResults, setQueryResults] = useState(null)

  const [lessonsInfo, setLessonsInfo] = useState(null)


  function handleQueryResults(data){
    setQueryResults(data)
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

    
    const filteredLessons = lessonsInfo.filter(lesson=>{
      return lesson.id !== id
    })

    setQueryResults(filteredResults)
    setLessonsInfo(filteredLessons)
  }

  function handleAddLesson(lessonInfo){
     const update = queryResults.map(user=>{
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

    setQueryResults(update)
  }

  function onLogout(){
    setCurrentUser({
      username: null,
      password: null
    })

    setQueryResults(null)
  }

  return (
    <div>
      <Header currentUser = {currentUser.username} setCurrentUser = {setCurrentUser} onLogout={onLogout} />
      {currentUser.username ? 
        <div>
          <div>
            <div id='searchOrCreate'>
              <CreateNewLesson handleAddLesson={handleAddLesson} />
              <Search handleQueryResults={handleQueryResults}/>
            </div>
          </div>
          {queryResults ? <Results results={queryResults} currentUser={currentUser} handleUpdatedLesson={handleUpdatedLesson} handleDeletedLesson={handleDeletedLesson} lessonsInfo={lessonsInfo} setLessonsInfo = {setLessonsInfo} /> : null}
        </div> :
        <p id='welcomeMessage' ><em>Welcome to TUTR! Please log in to get started.</em></p>}
    </div>
  );
}

export default App;
