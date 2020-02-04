import React from "react";

const TimerControls = function(props) {
    return(
        <div>
            <button id={`${props.type}-decrement`}>-</button>
            <button id={`${props.type}-increment`}>+</button>
        </div>
    );
}

export default TimerControls;