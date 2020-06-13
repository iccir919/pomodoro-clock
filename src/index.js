import React from 'react';
import ReactDOM from 'react-dom';
import "./style/normalize.css";
import PomodoroClock from './PomodoroClock';

ReactDOM.render(
  <React.StrictMode>
    <PomodoroClock />
  </React.StrictMode>,
  document.getElementById('root')
);