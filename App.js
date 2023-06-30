import './App.css';
import React from 'react';
import Reusecomp from './Reusecomp';
function App() {
  const users = [
    {
      name:"Anil", email:"anil23@gmail.com",contact:111
    },
    {
      name:"Neeta", email:"neeta65@gmail.com",contact:222
    },
    {
      name:"Asha", email:"ashashinde34@gmail.com",contact:333
    },
    {
      name:"Pranjali", email:"pranjali379@gmail.com",contact:444
    },
  ]
  return(
    <div className='App'>
      <h1>Reuse component in Reactjs</h1>
      {
        users.map((item,i)=>
        <Reusecomp data={item} />
        )
      }
    </div>
  )
}
export default App