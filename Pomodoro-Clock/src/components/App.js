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
    isRunning: false,
    isBreak: false,
    timerType: "Session",
    time: 25 * 60,
    maxTime: 25 * 60
  };

  getMaxTime = isBreak => {
    if (isBreak) {
      return this.state.brkLength * 60;
    } else {
      return this.state.seshLength * 60;
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isRunning) {
      if (!this.timer) this.timer = this.startTimer();
    } else {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  handleStart = () => {
    this.setState({
      isRunning: !this.state.isRunning
    });
  };

  startTimer = () => {
    let _this = this;
    return window.setInterval(function() {
      if (_this.state.time > 0) {
        console.log(_this.state.time);
        _this.setState({
          time: _this.state.time - 1
        });
      } else {
        _this.timeOver();
      }
    }, 1000);
  };

  timeOver = () => {
    this.setState({
      isBreak: !this.state.isBreak,
      maxTime: this.getMaxTime(!this.state.isBreak),
      time: this.getMaxTime(!this.state.isBreak),
      timerType: this.state.isBreak ? "Session" : "Break"
    });
  };

  handleBreak = () => {
    this.setState({
      isBreak: !this.state.isBreak,
      maxTime: this.getMaxTime(!this.state.isBreak),
      time: this.getMaxTime(!this.state.isBreak),
      timerType: this.state.isBreak ? "Session" : "Break"
    });
  };

  handleReset = () => {
    this.setState({
      time: this.state.maxTime,
      isPlaying: false
    });
  };

  componentWillUnmount() {
    window.clearInterval(this.timer);
    this.timer = null;
  }

  setBrkLength = action => {
    this.lengthControl("brkLength", action, this.state.brkLength, "Session");
  };

  setSeshLength = action => {
    this.lengthControl("seshLength", action, this.state.seshLength, "Break");
  };

  lengthControl = (stateToChange, action, currentLength, timerType) => {
    if (this.state.isRunning) return;
    if (this.state.timerType == timerType) {
      if (action == "remove" && currentLength != 1) {
        this.setState({ [stateToChange]: currentLength - 1 });
      } else if (action == "add" && currentLength != 60) {
        this.setState({ [stateToChange]: currentLength + 1 });
      }
    } else {
      if (action == "remove" && currentLength != 1) {
        this.setState({
          [stateToChange]: currentLength - 1,
          time: currentLength * 60 - 60,
          maxTime: currentLength * 60 - 60
        });
      } else if (action == "add" && currentLength != 60) {
        this.setState({
          [stateToChange]: currentLength + 1,
          time: currentLength * 60 + 60,
          maxTime: currentLength * 60 + 60
        });
      }
    }
  };

  getIconName = () => {
    if (this.state.isRunning) {
      return "pause";
    } else {
      return "play_arrow";
    }
  };

  getTypeIconName = () => {
    if (this.state.isBreak) {
      return "work";
    } else {
      return "work_off";
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="display2" gutterBottom>
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
          <Clock
            timerType={this.state.timerType}
            time={this.state.time}
            maxTime={this.state.maxTime}
          />
        </Grid>
        <Grid item xs={12}>
          <FloatingActionButtons
            getIconName={this.getIconName}
            handleStart={this.handleStart}
            handleReset={this.handleReset}
            time={this.state.time}
            handleBreak={this.handleBreak}
            getTypeIconName={this.getTypeIconName}
          />
        </Grid>
      </Grid>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
