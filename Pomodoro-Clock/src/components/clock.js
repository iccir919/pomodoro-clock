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

// var Clock = React.createClass({
//   getDefaultProps: function() {
//     return {
//       time: 25 * 60 * 1000,
//       maxtime: 25 * 60 * 1000
//     };
//   },

//   getTime: function() {
//     return moment.utc(this.props.time).format("mm.ss");
//   },

//   getPercent: function() {
//     return (
//       100 - ((this.props.maxtime - this.props.time) / this.props.maxtime) * 100
//     );
//   },

//   render: function() {
//     return (
//       <div className="clock">
//         {this.getTime()}
//         <div className="circular">
//           <CircularProgress
//             mode="determinate"
//             value={this.getPercent()}
//             size={5}
//           />
//         </div>
//       </div>
//     );
//   }
// });

// module.exports = Clock;
