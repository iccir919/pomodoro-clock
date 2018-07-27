import React from "react";

import Typography from "@material-ui/core/Typography";

class TimerLengthControl extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="headline" gutterBottom>
          {this.props.title}
        </Typography>
      </div>
    );
  }
}

export default TimerLengthControl;
