import React, { Component } from "react";
import style from "./style.scss";
import PadBank from "./PadBank.js";

const bank = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Mmm-hmm",
    url: "../assets/audio/clip0.mp3",
    backgroundImage: "face0"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Some-things",
    url: "../assets/audio/clip1.mp3",
    backgroundImage: "face1"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "He-ha-ha",
    url: "../assets/audio/clip2.mp3",
    backgroundImage: "face2"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Meh-ha",
    url: "../assets/audio/clip3.mp3",
    backgroundImage: "face3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Ba-ba-ba",
    url: "../assets/audio/clip4.mp3",
    backgroundImage: "face4"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Yknow-what",
    url: "../assets/audio/clip5.mp3",
    backgroundImage: "face5"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Hoo-yea",
    url: "../assets/audio/clip6.mp3",
    backgroundImage: "face6"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Hey",
    url: "../assets/audio/clip7.mp3",
    backgroundImage: "face7"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Show-it",
    url: "../assets/audio/clip8.mp3",
    backgroundImage: "face8"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPadBank: bank,
      display: String.fromCharCode(160)
    };
    this.clearDisplay = this.clearDisplay.bind(this);
    this.displayClipName = this.displayClipName.bind(this);
  }

  displayClipName(name) {
    this.setState({
      display: name
    });
  }

  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160)
    });
  }

  render() {
    return (
      <div id="drum-machine" className="inner-container">
        <PadBank
          updateDisplay={this.displayClipName}
          currentPadBank={this.state.currentPadBank}
        />
        <div className="controls-container">
          <div className="logo">
            <div className="inner-logo ">{"CARDI B NOISE MACHINE"}</div>
          </div>
          <p id="display">{this.state.display}</p>
        </div>
      </div>
    );
  }
}

export default App;
