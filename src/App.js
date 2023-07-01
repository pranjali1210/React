import './App.css';
import React,{useRef} from 'react';
function App()
{
  let inputRef=useRef(null)
  function handleInput()
  {
    //inputRef.current.value="100"
    //inputRef.current.focus()
   // inputRef.current.style.color="red"
    inputRef.current.style.display="none"
  }
  return(
    <div className='App'>
      <h1>useRef in React</h1>
      <input type='text' ref={inputRef}/>
      <button onClick={()=>handleInput()}>Handle input</button>
    </div>
  )
}

export default App