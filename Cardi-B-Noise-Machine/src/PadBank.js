import React, { Component } from "react";
import DrumPad from "./DrumPad.js";

class PadBank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
      return (
        <DrumPad
          key={padBankArr[i].id}
          clipId={padBankArr[i].id}
          clip={padBankArr[i].url}
          keyTrigger={padBankArr[i].keyTrigger}
          keyCode={padBankArr[i].keyCode}
          updateDisplay={this.props.updateDisplay}
          backgroundImage={padBankArr[i].backgroundImage}
        />
      );
    });
    return <div className="pad-bank">{padBank}</div>;
  }
}

export default PadBank;
