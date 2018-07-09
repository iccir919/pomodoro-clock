import React, { Component } from "react";

const activeStyle = {
  backgroundColor: "yellow",
  boxShadow: "0 3px grey",
  height: 77,
  marginTop: 13
};

const inactiveStyle = {
  marginTop: 10,
  boxShadow: "3px 3px 5px black",
  backgroundColor: "gray"
};

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.activatePad = this.activatePad.bind(this);
  }

  activatePad() {
    this.state.padStyle.backgroundColor === "yellow"
      ? this.setState({
          padStyle: inactiveStyle
        })
      : this.setState({
          padStyle: activeStyle
        });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound(e) {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
  }

  render() {
    const style = {
      background: `url(../assets/images/${
        this.props.backgroundImage
      }.png) no-repeat`,
      backgroundSize: "120%"
    };
    Object.assign(style, this.state.padStyle);
    return (
      <div
        id={this.props.clipId}
        onClick={this.playSound}
        className="drum-pad"
        style={style}
      >
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.clip}
        />
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default DrumPad;
