import React, { Component } from "react";
import style from "./style.scss";
import PadBank from "./PadBank.js";

const bank = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Mmm-hmm",
    url: "../audio/clip0.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Some-things",
    url: "../audio/clip1.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "He-ha-ha",
    url: "../audio/clip2.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Meh-ha",
    url: "../audio/clip3.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Ba-ba-ba",
    url: "../audio/clip4.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Yknow-what",
    url: "../audio/clip5.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Hoo-yea",
    url: "../audio/clip6.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Hey",
    url: "../audio/clip7.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Show-it",
    url: "../audio/clip8.mp3"
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
      <div id="drum-machine" className="inner-container">
        <PadBank currentPadBank={this.state.currentPadBank} />
        <div className="logo">
          <div className="inner-logo ">{"Cardi B Noise Machine"}</div>
        </div>
      </div>
    );
  }
}

export default App;
