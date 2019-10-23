import React from "react";

import Button from "@material-ui/core/Button";

function Controls(props) {
  return (
    <div>
      <Button
        variant="contained"
        id="start_stop"
        onClick={props.changeTimerState}
      >
        {props.timerState === "paused" ? "play" : "pause"}
      </Button>
      <Button variant="contained" onClick={props.reset} id="reset">
        reset
      </Button>
    </div>
  );
}

export default Controls;
