import React from "react";

const TimeDisplay = function(props) {
    return (
        <div id={`${props.type}-label`}>
            <h2>00:00 of {props.type.toUpperCase()} left</h2>
        </div>
    );
}

export default TimeDisplay;