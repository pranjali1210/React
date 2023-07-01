import './App.css';
import React from 'react';
import Parentchild from './Parentchild';
function App() {
  function parentAlert(data)
    {
        alert(data)
    }
  return(
    <div className='App'>
      <h1>
        Lifting state up
        <Parentchild alert={parentAlert}/>
      </h1>
    </div>
  )
  
}
export default App