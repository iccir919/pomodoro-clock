import React from "react";

import LengthInput from "./LengthInput";
import Time from "./Time";
import Controls from "./Controls";

import alarm from "./alarm.mp3";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerTime: 25 * 60,
      timerState: "paused",
      timerType: "session",
      timerId: ""
    };
    this.audio = React.createRef();
  }

  changeTimerState() {
    if (this.state.timerState === "paused") {
      this.setState({
        timerState: "playing"
      });
      this.startTimer();
    } else {
      this.setState({
        timerState: "paused"
      });
      clearInterval(this.state.timerId);
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
            timerTime: state.timerTime + 60
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
            timerTime: state.timerTime - 60
          };
        });
      }
    }
  }

  tick() {
    const newTime = this.state.timerTime - 1;
    if (newTime >= 0) {
      this.setState({
        timerTime: newTime
      });
    } else {
      this.audio.current.play();
      clearInterval(this.state.timerId);
      if (this.state.timerType === "session") {
        this.setState(state => {
          return { timerTime: state.breakLength * 60, timerType: "break" };
        });
      } else {
        this.setState(state => {
          return { timerTime: state.sessionLength * 60, timerType: "session" };
        });
      }
      this.startTimer();
    }
  }

  startTimer() {
    let timerId = setInterval(() => {
      this.tick();
    }, 1000);
    this.setState({
      timerId: timerId
    });
  }

  reset() {
    clearInterval(this.state.timerId);
    this.audio.current.pause();
    this.audio.current.currentTime = 0;
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timerTime: 25 * 60,
      timerState: "paused",
      timerType: "session",
      timerId: ""
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
        <Time time={this.state.timerTime} type={this.state.timerType} />
        <Controls
          changeTimerState={this.changeTimerState.bind(this)}
          reset={this.reset.bind(this)}
          timerState={this.state.timerState}
        />
        <audio ref={this.audio} id="beep">
          <source src={alarm} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default App;
