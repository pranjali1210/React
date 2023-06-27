import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App()
{
  const [data,setData]=useState("Asha")
  return(
    <div className='App'>
      <h1>Hello {data}</h1>
      <button onClick={()=>setData("Pranjali")}>Update Name</button>
    </div>
  )
}
export default App