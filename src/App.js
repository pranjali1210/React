import './App.css';
import React, { useRef } from 'react';
function App() {

  let inputRef=useRef(null)
  let inputRef1=useRef(null)
  

  function submitform(e)
  {
    e.preventDefault()
    console.warn("Input field 1 value" ,inputRef.current.value)
    console.warn("Input field 2 value" ,inputRef1.current.value)
    let input3=document.getElementById("input3").value
    console.warn("Input field 3 value" ,input3)
  }
  return (
    <div className='App'>
      <h1>Uncontrolled components</h1>
      <form onSubmit={submitform}>   
        <input ref={inputRef} type='text' /><br /><br />
        <input ref={inputRef1} type='text' /><br /><br />
        <input id="input3" type='text'/><br /><br />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App