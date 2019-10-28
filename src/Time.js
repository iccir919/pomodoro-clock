import React from "react";

function Time(props) {
  const remainingTime = props.startingTime - props.elapsedTime;
  let minutes = Math.floor(remainingTime / 60000);
  if (minutes < 10) minutes = "0" + minutes;
  let seconds = Math.floor(remainingTime % 60000 / 1000);
  if (seconds < 10) seconds = "0" + seconds;
  return (
    <div>
      <h2>{props.isSession ? "session" : "break"}</h2>
      <p>{`${minutes}:${seconds}`}</p>
      <progress 
        max={props.startingTime}
        value={props.startingTime - props.elapsedTime}
      ></progress>
    </div>
  )
}

export default Time;
