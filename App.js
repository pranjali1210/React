import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [data,setData]=useState("Pranju")
  function updateData()
  {
    setData("Shinde")
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
      
    </div>
  );
}

export default App;
