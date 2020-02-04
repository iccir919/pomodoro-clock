import React from "react";
import TimerControls from "./TimerControls";

const Timer = function(props) {
    return (
        <div>
            <h2 id={`${props.type}-label`}>{`${props.type} length`}</h2>
            <TimerControls type={props.type} />
        </div>
    );
}

export default Timer;