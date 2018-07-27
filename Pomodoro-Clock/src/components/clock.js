import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class Clock extends React.Component {
  timer = null;

  state = {
    time: 25 * 60 * 1000,
    maxtime: 25 * 60 * 1000
  };

  componentDidMount() {
    console.log(this.props.time);
  }

  getTime = () => {
    return moment.utc(this.props.time).format("mm:ss");
  };

  getPercent = () => {
    return (
      100 - ((this.props.maxtime - this.props.time) / this.props.maxtime) * 100
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CircularProgress
          className={classes.progress}
          color="secondary"
          variant="determinate"
          size={50}
          value={this.getPercent()}
        />
      </div>
    );
  }
}

Clock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Clock);
