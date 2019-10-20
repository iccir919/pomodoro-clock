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
      time: 25 * 60
    };
  }

  changeLength(direction, type) {
    if (direction === "increase") {
      if (type === "break") {
        this.setState(state => {
          return { breakLength: state.breakLength + 1 };
        });
      } else {
        this.setState(state => {
          return { sessionLength: state.sessionLength + 1 };
        });
      }
    } else {
      if (type === "break") {
        this.setState(state => {
          return { breakLength: state.breakLength - 1 };
        });
      } else {
        this.setState(state => {
          return { sessionLength: state.sessionLength - 1 };
        });
      }
    }
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
        <Time length={this.state.time} />
      </div>
    );
  }
}

export default App;
