import React from "react";

function LengthInput(props) {
  return (
    <div>
      <h3 id={`${props.type}-label`}>{`${props.type} length`}</h3>
      <div className="length-input">
        <button
          id={`${props.type}-decrement`}
          className="length-input-action decrement"
          onClick={() => props.handleChange(props.type, -1)}
        >
          -
        </button>
        <span className="length-number" id={`${props.type}-length`}>
          {props.length}
        </span>
        <button
          id={`${props.type}-increment`}
          className="length-input-action increment"
          onClick={() => props.handleChange(props.type, 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default LengthInput;


