import React from "react";

import TimeDisplay from "../components/Timer";
import "./PomodoroClock.css";

class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: 0,
      breakLength: 5,
      sessionLength: 25
    };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="PomodoroClock">
        <h1>Pomodoro Clock</h1>
        <div>
          <TimeDisplay length={this.state.breakLength} type="break" />
          <TimeDisplay length={this.state.sessionLength} type="session" />
        </div>
      </div>
    );
  }
}

export default PomodoroClock;
