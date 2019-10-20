import React from "react";

function LengthInput(props) {
  return (
    <div>
      <h2 id={`${props.type}-label`}>{`${props.type} length`}</h2>
      <button
        id={`${props.type}-decrement`}
        onClick={props.onButtonClick.bind(this, "decrease", props.type)}
      >
        -
      </button>
      <span id={`${props.type}-length`}>{props.length}</span>
      <button
        id={`${props.type}-increment`}
        onClick={props.onButtonClick.bind(this, "increase", props.type)}
      >
        +
      </button>
    </div>
  );
}

export default LengthInput;
