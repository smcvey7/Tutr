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

  return (
    <div className="App">
      <Header currentUser = {currentUser.username} setCurrentUser = {setCurrentUser} />
      <Search setQueryResults={setQueryResults}/>
      <Results results={queryResults}/>
    </div>
  );
}

export default App;
