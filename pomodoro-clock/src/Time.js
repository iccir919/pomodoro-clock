import React from "react";

function Time(props) {
  return (
    <div>
      <h2>Session</h2>
      <p>{`${props.length / 60}:${props.length % 60}`}</p>
    </div>
  );
}

export default Time;
