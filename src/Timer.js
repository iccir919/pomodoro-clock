import React from "react";

const Timer = (props) => {
    return (
        <div class="timer">
            <button className="rounded-pill" onClick={() => props.timerControl()} id="start_stop">{props.isPaused ? "start" : "stop"}</button>
            <button className="rounded-pill" onClick={() => props.reset()} id="reset">reset</button>
            <h2 className="section-heading" id="timer-label">{"time left of " + props.timerType}</h2>
            <p className="timer-display" id="time-left">{transformTime(props.timeLeft)}</p>
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