import React from "react";

import Button from "react-bootstrap/Button";

function LengthInput(props) {
  return (
    <div>
      <h5 id={`${props.type}-label`}>{`${props.type} length`}</h5>
      <Button
        id={`${props.type}-decrement`}
        onClick={props.onButtonClick.bind(this, "decrease", props.type)}
        className="m-2"
      >
        -
      </Button>
      <span className="length-number" id={`${props.type}-length`}>
        {props.length}
      </span>
      <Button
        id={`${props.type}-increment`}
        onClick={props.onButtonClick.bind(this, "increase", props.type)}
        className="m-2"
      >
        +
      </Button>
    </div>
  );
}

export default LengthInput;
