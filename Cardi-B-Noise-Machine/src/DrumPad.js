import React, { Component } from "react";
import style from "./style.css";

class DrumPad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={style.drumPad}>{this.props.keyTrigger}</div>;
  }
}

export default DrumPad;
