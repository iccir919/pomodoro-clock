import React from 'react';
import { shallow } from 'enzyme';

import PomodoroClock from './PomodoroClock';

it('renders welcome message', () => {
  const wrapper = shallow(<PomodoroClock />);
  expect(wrapper.find('#break-label')).toHaveLength(1);
});