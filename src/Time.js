import React from "react";

function Time(props) {
  let minutes = Math.floor(props.remainingTime / 60000);
  if (minutes < 10) minutes = "0" + minutes;
  let seconds = Math.floor(props.remainingTime % 60000 / 1000);
  if (seconds < 10) seconds = "0" + seconds;
  return (
    <div>
      <h2>{props.isSession ? "session" : "break"}</h2>
      <p>{`${minutes}:${seconds}`}</p>
    </div>
  )
}

export default Time;
