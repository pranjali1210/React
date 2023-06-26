import React from "react";
function PassF(props) {
    return (
        <div>
            <h1>Pass Function as Probe </h1>
            <button onClick={props.data}>Call data Function</button>
        </div>
    )
}

export default PassF