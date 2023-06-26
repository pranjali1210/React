import logo from './logo.svg';
import './App.css';
import PassF from './PassF';
import Members from './Members';
function App()
{
  function getData()
  {
    alert("Hello from App")
  }
  return(
    <div className='App'>
      <PassF data={getData}/>
      <div style={{float:'right'}}>
        <Members data={getData}/>
      </div>
    </div>
  )
}

export default App