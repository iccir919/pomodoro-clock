import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  controls: {
    display: "flex",
    alignItems: "center",
    justify: "center",
    paddingBottom: theme.spacing.unit
  }
});

function TimerLengthControl(props) {
  const { classes, title, length, clickHandler } = props;

  return (
    <div>
      <div>
        <Typography variant="headline">{title}</Typography>
      </div>
      <div className={classes.controls}>
        <IconButton
          onClick={() => {
            clickHandler("remove");
          }}
          aria-label="Remove"
        >
          <Icon>remove</Icon>
        </IconButton>
        <Typography variant="title">{length} min.</Typography>
        <IconButton
          onClick={() => {
            clickHandler("add");
          }}
          aria-label="Add"
        >
          <Icon>add</Icon>
        </IconButton>
      </div>
    </div>
  );
}

TimerLengthControl.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TimerLengthControl);
