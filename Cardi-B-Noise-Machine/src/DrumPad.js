import React, { Component } from "react";

class DrumPad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.keyTrigger}</div>;
  }
}

export default DrumPad;
