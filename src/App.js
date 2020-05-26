import React from 'react';
import Timebox from "./Timebox";
import Timer from "./Timer";

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      timerType: "session",
      timeLeft: 25 * 60,
      isPaused: true,
      timerID: null
    }

    this.adjustLength = this.adjustLength.bind(this);
    this.timerControl = this.timerControl.bind(this);
    this.reset = this.reset.bind(this);
  }

  timerControl() {
    if (this.state.isPaused) {
      const timerID = setInterval(() => {
        if (this.state.timeLeft === 0) {
          const newType = this.state.timerType === "session" ? "break" : "session";
          this.setState((prevState) => ({
            timerType: newType,
            timeLeft: prevState[`${newType}Length`] * 60
          }))
        } else {
          this.setState((prevState) => ({
            timeLeft: prevState.timeLeft - 1
          }))
        }
      }, 1000);

      this.setState({
        timerID: timerID,
        isPaused: false
      })
    } else {
      clearInterval(this.state.timerID);
      this.setState({
        isPaused: true
      })
    }
  }

  adjustLength(type, direction) {
    if (!this.state.isPaused) return
    if (this.state[`${type}Length`] === 1 && direction === "decrement") return;
    if (this.state[`${type}Length`] === 60) return;

    const interval = direction === "increment" ? 1 : -1;
    this.setState((prevState) => ({
      [`${type}Length`]: prevState[`${type}Length`] + interval,
      timeLeft: prevState.timerType === type ? (prevState[`${type}Length`] + interval) * 60 : prevState.timeLeft
    }))
  }

  reset() {
    clearInterval(this.state.timerID);

    this.setState({
      sessionLength: 25,
      breakLength: 5,
      timerType: "session",
      timeLeft: 25 * 60,
      isPaused: true,
      timerID: null
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Pomodoro Clock</h1>
        <div className="timeboxes">
          <Timebox 
            length={this.state.sessionLength} 
            type="session"
            adjustLength={this.adjustLength}
          />
          <Timebox 
            length={this.state.breakLength} 
            type="break" 
            adjustLength={this.adjustLength}
          />
        </div>
        <Timer 
          timerType={this.state.timerType}
          timeLeft={this.state.timeLeft}
          isPaused={this.state.isPaused}
          timerControl={this.timerControl}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
