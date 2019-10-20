import React from "react";

function Time(props) {
  let seconds = props.time % 60;
  let minutes = Math.floor(props.time / 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return (
    <div>
      <h2 id="timer-label">{props.type}</h2>
      <h3 id="time-left">{`${minutes}:${seconds}`}</h3>
    </div>
  );
}

export default Time;
