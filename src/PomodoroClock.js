import React from "react";
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
        <p>Seconds: {this.state.seconds}</p>
      </div>
    );
  }
}

export default PomodoroClock;
