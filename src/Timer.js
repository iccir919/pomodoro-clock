import React from "react";

const Timer = (props) => {
    return (
        <div>
            <h2 id="timer-label">{"time left of " + props.timerType}</h2>
            <p id="time-left">{transformTime(props.timeLeft)}</p>
            <button onClick={() => props.timerControl()} id="start_stop">{props.isPaused ? "start" : "stop"}</button>
            <button onClick={() => props.reset()} id="reset">reset</button>
        </div>
    )
}

const transformTime = (time) => {
    let hours = Math.floor(time / 60);
    if (hours < 10) hours = "0" + hours;
    let seconds = time % 60;
    if (seconds < 10) seconds = "0" + seconds;
    return `${hours}:${seconds}`;
}

export default Timer;