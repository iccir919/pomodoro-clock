import React from "react";

import TimeDisplay from "../components/Timer";
import "./PomodoroClock.css";

class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
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
          <TimeDisplay type="break" />
          <TimeDisplay type="session" />
        </div>
      </div>
    );
  }
}

export default PomodoroClock;
