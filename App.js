import logo from './logo.svg';
import './App.css';
import Render from './Render';
import React, {useState} from 'react';

function App()
{
  const [name,setName]=useState("Pranjali")
  return(
    <div>
      <h1>Render Life cycle</h1>
      <Render name={name}/> 
      <button onClick={()=>setName("Asha")}>Update Name</button>
    </div>
  )
}
export default App