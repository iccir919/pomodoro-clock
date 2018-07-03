import React, { Component } from "react";
import style from "./style.css";
import DrumPad from "./DrumPad.js";

class PadBank extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let padBank;
    this.props.power
      ? (padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <DrumPad
              keyTrigger={padBankArr[i].keyTrigger}
              keyCode={padBankArr[i].keyCode}
            />
          );
        }))
      : (padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <DrumPad
              keyTrigger={padBankArr[i].keyTrigger}
              keyCode={padBankArr[i].keyCode}
            />
          );
        }));
    return <div className={style.padBank}>{padBank}</div>;
  }
}

export default PadBank;
