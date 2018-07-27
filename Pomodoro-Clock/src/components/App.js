import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import TimerLengthControl from "./timerLengthControl";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 5,
    flexGrow: 1,
    textAlign: "center"
  }
});

class App extends React.Component {
  state = {
    brkLength: 5,
    seshLength: 25
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="display1" gutterBottom>
            Pomodoro Clock
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify={"center"} direction={"row"} spacing={16}>
            <Grid item>
              <TimerLengthControl title="Break Length" />
            </Grid>
            <Grid item>
              <TimerLengthControl title="Work Length" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
