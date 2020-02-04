import React from "react";

const TimeDisplay = function(props) {
    return (
        <div id={`${props.type}-label`}>
            <h2>{props.type.toUpperCase()} left</h2>
            <button id={`${props.type}-decrement`}>-</button>
            <span> 00:00 </span>
            <button id={`${props.type}-increment`}>+</button>
        </div>
    );
}

export default TimeDisplay;