import React, {useState} from "react";

function Search(){
  const [query, setQuery] = useState("")
  const [checks, setChecks] = useState({
    all: true,
    students: true,
    tutors: true
  })

  function onChangeQuery(e){
    setQuery(e.target.value)
    console.log(e.target.value)
  }

  function checkAll(){
    checks.all ?
      setChecks({
        all: false,
        students: false,
        tutors: false
      }) :
      setChecks({
        all: true,
        students: true,
        tutors: true
      })
  }

  function onCheckChange(e){
    console.log(e)
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
  }

  return(
    <div>
      <h2>Search</h2>
      <form>
        <input value={query} onChange={onChangeQuery}/>
        <select>
        <option>user</option>
        <option>course</option>
      </select><br/>
        <input checked={checks.all} onChange={checkAll} type="checkbox"  />all
        <input checked={checks.students} name="students" onChange={onCheckChange} type="checkbox"/>students
        <input checked={checks.tutors} name="tutors" onChange={onCheckChange} type="checkbox"/>tutors

      </form>
    </div>
  )
}

export default Search