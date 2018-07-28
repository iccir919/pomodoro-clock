import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import TimerLengthControl from "./timerLengthControl";
import Clock from "./clock";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";

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
    timer: 1500
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
      if (sign == "remove" && currentLength != 1) {
        this.setState({ [stateToChange]: currentLength - 1 });
      } else if (sign == "add" && currentLength != 60) {
        this.setState({ [stateToChange]: currentLength + 1 });
      }
    } else {
      if (sign == "remove" && currentLength != 1) {
        this.setState({
          [stateToChange]: currentLength - 1,
          timer: currentLength * 60 - 60
        });
      } else if (sign == "add" && currentLength != 60) {
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
          <Grid item xs={12}>
            <Clock />
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
