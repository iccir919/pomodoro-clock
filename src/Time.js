import React from "react";

function Time(props) {
  let minutes = Math.floor(props.remainingTime / 60);
  let seconds = props.remainingTime % 60;
  
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return (
    <div>
      <h2 id="timer-label">{props.isSession ? "session" : "break"}</h2>
      <p id="time-left" className="time-number">{`${minutes}:${seconds}`}</p>
    </div>
  )
}

export default Time;
