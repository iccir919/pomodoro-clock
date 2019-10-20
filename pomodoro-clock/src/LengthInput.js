import React from "react";

function LengthInput(props) {
  return (
    <div>
      <h2>{`${props.type} length`}</h2>
      <button onClick={props.onButtonClick.bind(this, "decrease", props.type)}>
        -
      </button>
      {props.length}
      <button onClick={props.onButtonClick.bind(this, "increase", props.type)}>
        +
      </button>
    </div>
  );
}

export default LengthInput;
