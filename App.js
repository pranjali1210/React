import logo from './logo.svg';
import './App.css';
import Student1 from './Student1'
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      name:"Anil"
    }
  }
  render()
  {
    return (
      <div className="App">
       <h1>Props !</h1>
       <Student1 name={this.state.name} email="anil@test.com"></Student1>
       <button onClick={()=>this.setState({name:"Sidhu"})} >Update Name</button>
      </div>
    );
  }
}

export default App;