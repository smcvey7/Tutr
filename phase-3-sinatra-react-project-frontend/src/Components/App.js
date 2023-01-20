import React, {useState, useEffect} from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';

function App() {

  const [currentUser, setCurrentUser] = useState({
    username: null,
    password: null
  })


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

  return (
    <div className="App">
      <Header currentUser = {currentUser.username} setCurrentUser = {setCurrentUser} />
      {currentUser.username ? <Search handleQueryResults={handleQueryResults}/> : <p><em>Welcome to TUTR! Please log in above to get started.</em></p>}
      {currentUser.username ? <Results results={queryResults} handleFilter={handleFilter} filteredResults={filteredResults} currentUser={currentUser} handleUpdatedLesson={handleUpdatedLesson} handleDeletedLesson={handleDeletedLesson} /> : <></>}
    </div>
  );
}

export default App;
