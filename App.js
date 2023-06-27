import logo from './logo.svg';
import './App.css';
import New from './New';
import React, {useEffect,useState} from 'react';
function App()
{
  const [data,setData]=useState(10)
  const[count,setCount]=useState(100)
 
  return(
    <div className='App'>
      
      <New count={count} data={data}/>
      <button onClick={()=>setCount(count+1)}>Update Counter</button>
      <button onClick={()=>setData(data+1)}>Update Data</button>
    </div>
  )
}
export default App