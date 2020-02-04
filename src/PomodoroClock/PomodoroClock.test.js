import React from 'react';
import { shallow } from 'enzyme';

import PomodoroClock from './index.js';

it('renders without crashing', () => {
  shallow(<PomodoroClock />);
});