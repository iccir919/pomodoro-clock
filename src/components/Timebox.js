import React from "react";

const Timebox = (props) => {
    return (
        <div className="timebox">
            <h3 className="section-heading" id={props.type + "-label"}>{props.type} length</h3>
            <button  
                className="rounded-pill"
                id={props.type + "-decrement"}
                onClick={() => props.adjustLength(props.type, "decrement")}
            >
                decrement
            </button>
            <button 
                className="rounded-pill"
                id={props.type + "-increment"}
                onClick={() => props.adjustLength(props.type, "increment")}
            >
                increment
            </button>
            <p className="session-length-display" id={props.type +  "-length"}>{props.length}</p>

        </div>
    )
}

export default Timebox;