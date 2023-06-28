import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Table } from 'react-bootstrap';
function App() {
  const students = [
    {
      name: "Pranjali", email: "pranju@gmail.com", address: [
        { hn: "10", city: "Noida", country: "India" },
        { hn: "34", city: "Gurgaon", country: "India" },
        { hn: "43", city: "Delhi", country: "India" },
        { hn: "90", city: "Noida", country: "India" }
      ]
    },
    {
      name: "Asha", email: "asha@gmail.com", address: [
        { hn: "10", city: "Noida", country: "India" },
        { hn: "34", city: "Gurgaon", country: "India" },
        { hn: "43", city: "Delhi", country: "India" },
        { hn: "90", city: "Noida", country: "India" }
      ]
    },
    {
      name: "Sujal", email: "sujal@gmail.com", address: [
        { hn: "10", city: "Noida", country: "India" },
        { hn: "34", city: "Gurgaon", country: "India" },
        { hn: "43", city: "Delhi", country: "India" },
        { hn: "90", city: "Noida", country: "India" }
      ]
    },
    {
      name: "Soham", email: "soham@gmail.com", address: [
        { hn: "10", city: "Noida", country: "India" },
        { hn: "34", city: "Gurgaon", country: "India" },
        { hn: "43", city: "Delhi", country: "India" },
        { hn: "90", city: "Noida", country: "India" }
      ]
    },
  ]
  return (
    <div className='App'>
      <h1>List with Bootstrap Table</h1>
      <Table variant='dark' striped>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>

          {
            students.map((item) =>
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Table variant='dark' striped>
                  <tr>
                      <td>House No</td>
                      <td>City</td>
                      <td>Contact</td>
                     </tr>
                    {
                      
                      item.address.map((data) =>

                        <tr>
                          <td>{data.hn}</td>
                          <td>{data.city}</td>
                          <td>{data.country}</td>
                        </tr>
                      )
                    
                      }
                      </Table>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>

    </div>
  )
}
export default App