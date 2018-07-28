import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import TimerLengthControl from "./timerLengthControl";
import Clock from "./clock";
import FloatingActionButtons from "./actionButtons";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    flexGrow: 1,
    textAlign: "center"
  }
});

class App extends React.Component {
  state = {
    brkLength: 5,
    seshLength: 25,
    timerState: "stopped",
    timerType: "Session",
    time: 1500,
    maxTime: this.getMaxTime()
  };

  getMaxTime = () => {
    if (this.state.timerType === "Session") {
      return this.state.seshLength * 60;
    } else {
      return this.state.brkLength * 60;
    }
  };

  timerControl = () => {
    let control =
      this.state.timerState == "stopped"
        ? (this.beginCountDown(), this.setState({ timerState: "running" }))
        : (this.setState({ timerState: "stopped" }),
          this.state.intervalID && this.state.intervalID.cancel());
  };

  setBrkLength = action => {
    this.lengthControl("brkLength", action, this.state.brkLength, "Session");
  };

  setSeshLength = action => {
    this.lengthControl("seshLength", action, this.state.seshLength, "Break");
  };

  lengthControl = (stateToChange, sign, currentLength, timerType) => {
    if (this.state.timerState == "running") return;
    if (this.state.timerType == timerType) {
      if (sign == "-" && currentLength != 1) {
        this.setState({ [stateToChange]: currentLength - 1 });
      } else if (sign == "+" && currentLength != 60) {
        this.setState({ [stateToChange]: currentLength + 1 });
      }
    } else {
      if (sign == "-" && currentLength != 1) {
        this.setState({
          [stateToChange]: currentLength - 1,
          timer: currentLength * 60 - 60
        });
      } else if (sign == "+" && currentLength != 60) {
        this.setState({
          [stateToChange]: currentLength + 1,
          timer: currentLength * 60 + 60
        });
      }
    }
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
          <Grid container justify={"center"} direction={"row"} spacing={24}>
            <Grid item>
              <TimerLengthControl
                length={this.state.brkLength}
                title="Break Length"
                clickHandler={this.setBrkLength}
              />
            </Grid>
            <Grid item>
              <TimerLengthControl
                length={this.state.seshLength}
                title="Work Length"
                clickHandler={this.setSeshLength}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Clock />
        </Grid>
        <Grid item xs={12}>
          <FloatingActionButtons time={this.state.time} />
        </Grid>
      </Grid>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
