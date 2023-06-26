import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App()
{
  const [name,setName]=useState("")
  const [tnc,setTnc]=useState(false)
  const [interest,setInterest]=useState("")
  function getFormData(e)
  {
    console.warn(name,tnc,interest)
    e.preventDefault()
  }
  return(
    <div className='App'>
      <h1>Handle form in React</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/><br></br>
        <br></br>
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br></br>
        <br></br>
        <br></br>
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms And Conditions</span>
          <br></br><br></br>
          <button type="submit" >Submit</button>
          <button type="reset">Clear</button>
        </form>
    </div>
  )
}

export default App