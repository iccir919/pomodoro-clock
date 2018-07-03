import React, { Component } from "react";
import style from "./style.css";
import PadBank from "./PadBank.js";

const bank = [
  {
    keyCode: 81,
    keyTrigger: "Q"
  },
  {
    keyCode: 87,
    keyTrigger: "W"
  },
  {
    keyCode: 69,
    keyTrigger: "E"
  },
  {
    keyCode: 65,
    keyTrigger: "A"
  },
  {
    keyCode: 83,
    keyTrigger: "S"
  },
  {
    keyCode: 68,
    keyTrigger: "D"
  },
  {
    keyCode: 90,
    keyTrigger: "Z"
  },
  {
    keyCode: 88,
    keyTrigger: "X"
  },
  {
    keyCode: 67,
    keyTrigger: "C"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPadBank: bank
    };
  }

  render() {
    return (
      <div id="drum-machine" className={style.innerContainer}>
        <PadBank currentPadBank={this.state.currentPadBank} />
        <div className={style.logo}>
          <div className="inner-logo ">{"Cardi B Noise Machine"}</div>
        </div>
        <div className={style.controlsContainer}>
          <div className={style.control}>
            <p>Power</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
