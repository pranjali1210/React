import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react';
function App(props)
{
  useEffect(()=>{
    alert("Count is"+props.count)
  },[props.count,props.data])
  return(
    <div className='App'> 
      <h1>count props : {props.count}</h1>
      <h1>Data props : {props.data}</h1>
      
    </div>
  )
}
export default App