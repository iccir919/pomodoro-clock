import React from "react";

import LengthInput from "./LengthInput";
import Time from "./Time";

import alarm from "./alarm.mp3";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      isRunning: false,
      isSession: true,
      remainingTime: 25 * 60,
      intervalId: ""
    };
    this.audio = React.createRef();
  }

  handleLengthChange = (type, amount) => {
    if(this.state.isRunning 
      || this.state[`${type}Length`] === 1 
      || this.state[`${type}Length`] === 60 ) return;

    if (type === "break") {
      this.setState((prevState) => ({
        breakLength: prevState.breakLength += amount,
      }));
    } else {
      this.setState((prevState) => ({
        sessionLength: prevState.sessionLength += amount
      }));
    }

    this.setState(prevState => ({
      remainingTime: prevState.isSession ? prevState.sessionLength * 60 : prevState.breakLength * 60
    }))
  }

  tick = () => {
    if (this.state.remainingTime === 0){
      this.audio.current.play();

      this.setState(prevState => ({
        isSession: !prevState.isSession,
        remainingTime: prevState.isSession ? prevState.breakLength * 60 : 
          prevState.sessionLength * 60,
      }));
    } else {
      this.setState(prevState => ({
        remainingTime: prevState.remainingTime - 1
      }))
    }
  }

  handlePomodoroClock = () => {
    if (this.state.isRunning){
      clearInterval(this.state.intervalId);

      this.setState({
        intervalId: "",
        isRunning: false
      })
    } else {
      this.setState({
        isRunning: true,
        intervalId: setInterval(this.tick, 1000)
      })
    }
  }

  reset = () => {
    this.audio.current.pause();
    this.audio.current.currentTime = 0;

    clearInterval(this.state.intervalId)

    this.setState({
      breakLength: 5,
      sessionLength: 25,
      isRunning: false,
      isSession: true,
      remainingTime: 25 * 60,
      intervalId: ""
    })
  }

  render() {
    return (
      <div className="pomodoro-clock">
        <header>
          <h1>Pomodoro Clock</h1>
        </header>

        <div className="length-inputs-container">
          <LengthInput 
            type="break"
            length={this.state.breakLength}
            handleChange={this.handleLengthChange}
          />
          <LengthInput
            type="session"
            length={this.state.sessionLength}
            handleChange={this.handleLengthChange}
          />
        </div>

        <Time 
          isSession={this.state.isSession}
          remainingTime={this.state.remainingTime}
          maximumTime={this.state.isSession ? this.state.sessionLength * 60
            : this.state.breakLength * 60}          
        />

        <div>
          <button id="start_stop" className="control-button start-pause" onClick={this.handlePomodoroClock}>
            {this.state.isRunning ? 'Pause' : 'Start'}
          </button>
          <button id="reset" className="control-button reset" onClick={this.reset}>Reset</button>
        </div>

        <audio ref={this.audio} id="beep">
          <source src={alarm} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default App;
