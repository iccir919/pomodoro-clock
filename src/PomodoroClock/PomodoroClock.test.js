import React from 'react';
import { shallow, mount } from 'enzyme';

import PomodoroClock from './index.js';

it('renders without crashing', () => {
  shallow(<PomodoroClock />);
});

it('it has an element with id="break-label" that contains a string (e.g. "Break Length")', () => {
  const wrapper = mount(<PomodoroClock />);
  expect(wrapper.find('#break-label')).toHaveLength(1);
  expect(wrapper.find('#break-label').text()).not.toHaveLength(0);
});

it('it has an element with id="session-label" that contains a string (e.g. "Session Length")', () => {
  const wrapper = mount(<PomodoroClock />);
  expect(wrapper.find('#session-label')).toHaveLength(1);
  expect(wrapper.find('#session-label').text()).not.toHaveLength(0);
});

it('it has two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement"', () => {
});

