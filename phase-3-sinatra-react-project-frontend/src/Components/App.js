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

  return (
    <div className="App">
      <Header currentUser = {currentUser.username} setCurrentUser = {setCurrentUser} />
      <Search/>
      <Results/>
    </div>
  );
}

export default App;
