import React from 'react'

export default class Student1 extends React.Component{


    render()
    {
        console.log(this.props)
        return(
        <div  style={{backgroundColor:'skyblue',margin:20}}>
           <h1>Hello  {this.props.name}</h1>
        
             </div>
        )
    }
}