import React from "react";

function Audio() {
  return (
    <audio controls>
      <source src="horse.ogg" type="audio/ogg" />
      Your browser does not support the audio element.
    </audio>
  );
}