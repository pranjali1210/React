import './App.css';
import React,{useState} from 'react';
import User from './User';
function App()
{
  let [val,setVal]=useState("")
    return(
      <div className='App'>
        <h1>Controlled Component</h1>
        <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/>
        <h3>value : {val}</h3>
      </div>
    )
}

export default App