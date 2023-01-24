import React, {useState} from "react";

function Search({handleQueryResults}){
  const [query, setQuery] = useState({
    queryType: "user",
    queryText: ""
  })

  function onChangeQuery(e){
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    if (query.queryText === ""){
      return null
    }

    fetch(`http://localhost:9292/${query.queryType}-lookup/${query.queryText}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      handleQueryResults(data)
    })

    setQuery({
      ...query,
      queryText: ""
    })
  }

  return(
    <div id="searchDiv">
      <h2>Search</h2>
      <div id="alignRight">
        <form onSubmit={handleSubmit}>
          <div className="flexContainer">
            <select id="searchSelect" name="queryType" value={query.queryType} onChange={onChangeQuery}>
              <option>user</option>
              <option>course</option>
            </select>
            <input id="search" name="queryText" value={query.queryText} onChange={onChangeQuery}/>
          </div>
          <input type="submit"/>
        </form>
      </div>
    </div>
  )
}

export default Search