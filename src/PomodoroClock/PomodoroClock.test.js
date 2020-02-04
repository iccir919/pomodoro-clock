import React from 'react';
import { shallow, mount } from 'enzyme';

import PomodoroClock from './index.js';

it('renders without crashing', () => {
  shallow(<PomodoroClock />);
});

it('it has an element with id="break-label" that contains a string (e.g. "Break Length")', () => {
  const wrapper = mount(<PomodoroClock />);
  expect(wrapper.find('#break-label')).toHaveLength(1);
});

it('it has an element with id="session-label" that contains a string (e.g. "Break Length")', () => {
    const wrapper = mount(<PomodoroClock />);
    expect(wrapper.find('#session-label')).toHaveLength(1);
});

it('it has an element with id="session-decrement" that contains a string (e.g. "Break Length")', () => {
  const wrapper = mount(<PomodoroClock />);
  expect(wrapper.find('#session-decrement')).toHaveLength(1);
});