import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React, {useState} from 'react';
function App()
{
  const [name,setName]=useState("Pranjali")
  return(
    <div className='App'>
      <Student name={name} />
      <button onClick={()=>{setName("Asha")}}>Update Name</button>
       
    </div>
    
  )
}


export default App;
