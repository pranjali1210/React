import './App.css';
import React, { PureComponent } from 'react';
class User extends PureComponent {
  render()
  {
    console.warn(" User Component Check rerendering")
    return(
      <div>
        <h1>User Component {this.props.count}</h1>
      </div>
    )
  }
  
  
}
export default User