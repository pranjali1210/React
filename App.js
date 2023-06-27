import logo from './logo.svg';
import './App.css';
function App() {
  const students=[
    {name:"Pranjali",email:"pranju@gmail.com",phone:8745343563},
    {name:"Asha",email:"asha@gmail.com",phone:955743563},
    {name:"Sujal",email:"sujal@gmail.com",phone:765343563}
  ]
  return (
    <div className='App'>
      <h1>Handle Array with List</h1>
      <table border="1">
      <tr>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
          </tr>
      {
        
        students.map((i) =>
          <tr>
            <td>{i.name}</td>
            <td>{i.email}</td>
            <td>{i.phone}</td>
          </tr>
        )
        
      }
      </table>

    </div>
  )
}
export default App