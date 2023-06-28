import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Table } from 'react-bootstrap';
function App() {
  const students=[
    {name:"Pranjali",email:"pranju@gmail.com",phone:222},
    {name:"Asha",email:"asha@gmail.com",phone:111},
    {name:"Sujal",email:"sujal@gmail.com",phone:777},
    {name:"Soham",email:"soham@gmail.com",phone:111}
  ]
  return (
    <div className='App'>
      <h1>List with Bootstrap Table</h1>
      <Table striped bordered hover variant="dark">
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        
      {
        students.map((item,i)=>
        item.phone===111?
        <tr key={i}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>:null
        )
      }
      </tbody>
      </Table>
    </div>
  )
}
export default App