import React from "react";
class Render extends React.Component{
    render()
    {
        console.warn("render Method",this.props.name)
        return(
            <div>
                <h1>Render Component {this.props.name}</h1>
            </div>
        )   
    }
}
export default Render