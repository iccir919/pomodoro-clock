import React from 'react';
import Timebox from "./components/Timebox";
import Timer from "./components/Timer";
import ProgressBar from "./components/ProgressBar"

import './style/App.css';
import audio from "./assets/bell-sound.mp3"

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
    this.controlAudio = this.controlAudio.bind(this);
    this.reset = this.reset.bind(this);
  }

  timerControl() {
    if (this.state.isPaused) {
      const timerID = setInterval(() => {
        if (this.state.timeLeft === 0) {
          this.controlAudio("play");
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
        document.title = transformTime(this.state.timeLeft) + " - Pomodoro Clock";
      }, 1000);

      this.setState({
        timerID: timerID,
        isPaused: false
      })
    } else {

      document.title = "Pomodoro Clock"
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

  controlAudio(command) {
    const audioEl = document.getElementById("beep");
    if (command === "play") {
      audioEl.play()
    } else {
      audioEl.pause();
      audioEl.currentTime = 0;
    }
  }

  reset() {
    this.controlAudio("stop");
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
        <h1 id="logo">Pomodoro Clock</h1>
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
        <ProgressBar 
          percentage={
            this.state.timerType === "session" ? 
            (this.state.timeLeft / (this.state.sessionLength * 60)) * 100 :
            (this.state.timeLeft / (this.state.breakLength * 60)) * 100
          } />
        <audio id="beep">
          <source src={audio}></source>
        </audio>
      </div>
    );
  }
}

export default App;

const transformTime = (time) => {
  let hours = Math.floor(time / 60);
  if (hours < 10) hours = "0" + hours;
  let seconds = time % 60;
  if (seconds < 10) seconds = "0" + seconds;
  return `${hours}:${seconds}`;
}
