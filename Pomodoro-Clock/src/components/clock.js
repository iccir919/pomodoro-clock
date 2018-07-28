import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  clock: {},
  circular: {}
});

class Clock extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.clock}>
        <div className={classes.circular}>
          <CircularProgress
            sizeclassName={classes.progress}
            variant="static"
            value={75}
            size={"16rem"}
          />
        </div>
        <Typography variant="display2" gutterBottom>
          9:19
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Clock);
