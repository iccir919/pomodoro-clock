import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import { Provider } from 'react-redux';

import PomodoroClock from './PomodoroClock';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PomodoroClock />
    </Provider>
  </React.StrictMode>
  ,document.getElementById('root')
);