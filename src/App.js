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
      previousTime: 0,
      elapsedTime: 0,
      isSession: true
    };
    this.audio = React.createRef();
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100)
  } 

  handleLengthChange = (type, amount) => {
    if(this.state[`${type}Length`] === 1) return;

    if (type === "break") {
      this.setState((prevState) => ({
        breakLength: prevState.breakLength += amount
      }));
    } else {
      this.setState((prevState) => ({
        sessionLength: prevState.sessionLength += amount
      }));
    }
  }

  tick = () => {
    if (this.state.isRunning){
      const maximumTime = this.state.isSession ? this.state.sessionLength * 60000 : this.state.breakLength * 60000;
      if (this.state.elapsedTime >= maximumTime) {
        this.setState(prevState => ({
          isSession: !prevState.isSession,
          elapsedTime: 0
        }));
      } else {
        const now = Date.now();
        this.setState(prevState => ({
            previousTime: now,
            elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
        }));
      }
    }
  }

  handlePomodoroClock = () => {
    this.setState(prevState => {
      return {
          isRunning: !prevState.isRunning
      }
    });

    if(!this.state.isRunning) {
      this.setState({previousTime: Date.now()})
    } 
  }

  reset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      isRunning: false,
      previousTime: 0,
      elapsedTime: 0,
      isSession: true
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
          remainingTime={(this.state.isSession ? this.state.sessionLength * 60000 : this.state.breakLength * 60000) - this.state.elapsedTime}
          isSession={this.state.isSession}
        />

        <div>
          <button className="control-button" onClick={this.handlePomodoroClock}>
            {this.state.isRunning ? 'Pause' : 'Start'}
          </button>
          <button className="control-button" onClick={this.reset}>Reset</button>
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
