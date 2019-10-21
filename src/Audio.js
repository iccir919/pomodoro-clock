import React from "react";
import alarm from "./alarm.mp3";

class Audio extends React.Component {
  render() {
    return (
      <audio id="beep">
        <source src={alarm} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    );
  }
}

export default Audio;
