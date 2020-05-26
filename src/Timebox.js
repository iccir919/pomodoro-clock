import React from "react";

const Timebox = (props) => {
    return (
        <div className="timebox">
            <h3 id={props.type + "-label"}>{props.type} length</h3>
            <p id={props.type +  "-length"}>{props.length}</p>
            <button  
                id={props.type + "-decrement"}
                onClick={() => props.adjustLength(props.type, "decrement")}
            >
                decrement
            </button>
            <button 
                id={props.type + "-increment"}
                onClick={() => props.adjustLength(props.type, "increment")}
            >
                increment
            </button>
        </div>
    )
}

export default Timebox;