import React from "react";
import LengthInput from "./LengthInput";
import Time from "./Time";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      time: 25 * 60,
      timerState: "paused",
      timerType: "session"
    };
  }

  changeTimerState() {
    if (this.state.timerState === "paused") {
      this.setState({
        timerState: "playing"
      });
    } else {
      this.setState({
        timerState: "paused"
      });
    }
  }

  changeLength(direction, type) {
    if (this.state.timerState === "playing") return;

    if (direction === "increase") {
      if (this.state.breakLength === 60) return;
      if (type === "break") {
        this.setState(state => {
          return { breakLength: state.breakLength + 1 };
        });
      } else {
        if (this.state.sessionLength === 60) return;
        this.setState(state => {
          return {
            sessionLength: state.sessionLength + 1,
            time: state.time + 60
          };
        });
      }
    } else {
      if (type === "break") {
        if (this.state.breakLength <= 1) return;
        this.setState(state => {
          return { breakLength: state.breakLength - 1 };
        });
      } else {
        this.setState(state => {
          if (this.state.sessionLength <= 1) return;
          return {
            sessionLength: state.sessionLength - 1,
            time: state.time - 60
          };
        });
      }
    }
  }

  reset() {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      time: 25 * 60,
      timerState: "paused",
      timerType: "session"
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <LengthInput
          onButtonClick={this.changeLength.bind(this)}
          type="break"
          length={this.state.breakLength}
        />
        <LengthInput
          onButtonClick={this.changeLength.bind(this)}
          type="session"
          length={this.state.sessionLength}
        />
        <Time
          time={this.state.time}
          type={this.state.timerType}
          length={this.state.time}
        />
        <button id="start_stop" onClick={this.changeTimerState.bind(this)}>
          {this.state.timerState === "paused" ? "play" : "paused"}
        </button>
        <button id="reset" onClick={this.reset.bind(this)}>
          reset
        </button>
      </div>
    );
  }
}

export default App;
