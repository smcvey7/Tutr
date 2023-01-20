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
  }

  return(
    <div>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <select name="queryType" value={query.queryType} onChange={onChangeQuery}>
          <option>user</option>
          <option>course</option>
        </select>
        <input name="queryText" value={query.queryText} onChange={onChangeQuery}/>
      <input type="submit"/>
      </form>
    </div>
  )
}

export default Search