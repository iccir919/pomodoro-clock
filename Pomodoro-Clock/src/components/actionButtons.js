import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function FloatingActionButtons(props) {
  const {
    classes,
    handleStart,
    getIconName,
    handleReset,
    getTypeIconName,
    handleBreak
  } = props;
  return (
    <div>
      <Button
        variant="fab"
        aria-label="Add"
        className={classes.button}
        onClick={handleStart}
      >
        <Icon>{getIconName()}</Icon>
      </Button>
      <Button
        onClick={handleReset}
        variant="fab"
        aria-label="Edit"
        className={classes.button}
      >
        <Icon>refresh</Icon>
      </Button>
      <Button
        onClick={handleBreak}
        variant="fab"
        aria-label="Edit"
        className={classes.button}
      >
        <Icon>{getTypeIconName()}</Icon>
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButtons);
