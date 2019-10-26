import React from "react";

function LengthInput(props) {
  return (
    <div>
      <h5 id={`${props.type}-label`}>{`${props.type} length`}</h5>
      <div className="length-input">
        <button
          id={`${props.type}-decrement`}
          onClick={props.onButtonClick.bind(this, "decrease", props.type)}
          className="length-input-action decrement"
        >
          -
        </button>
        <span className="length-number" id={`${props.type}-length`}>
          {props.length}
        </span>
        <button
          id={`${props.type}-increment`}
          onClick={props.onButtonClick.bind(this, "increase", props.type)}
          className="length-input-action increment"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default LengthInput;


