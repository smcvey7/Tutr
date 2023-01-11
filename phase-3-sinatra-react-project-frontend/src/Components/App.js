import React, {useState, useEffect} from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  return (
    <div className="App">
      <Header currentUser = {currentUser} setCurrentUser = {setCurrentUser} />
      <Search/>
      <Results/>
    </div>
  );
}

export default App;
