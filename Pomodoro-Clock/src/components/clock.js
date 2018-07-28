import React from "react";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";

import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  clock: {},
  circular: {},
  progress: {}
});

class Clock extends React.Component {
  getTime = () => {
    return moment.utc(this.props.time * 1000).format("mm:ss");
  };

  getPercent = () => {
    const { maxTime, time } = this.props;
    return 100 - ((maxTime - time) / maxTime) * 100;
  };

  render() {
    const { classes, timerType } = this.props;
    return (
      <div className={classes.clock}>
        <div className={classes.circular}>
          <CircularProgress
            sizeclassName={classes.progress}
            variant="static"
            value={this.getPercent()}
            size={"16rem"}
          />
        </div>
        <Typography id="time-left" variant="display2" gutterBottom>
          {this.getTime()}
        </Typography>
        <Typography id="timer-label" variant="headline" gutterBottom>
          {timerType}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Clock);
