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
  const wrapper = mount(<PomodoroClock />);
  expect(wrapper.find('#break-decrement')).toHaveLength(1);
  expect(wrapper.find('#session-decrement')).toHaveLength(1);
});

it('it has two clickable elements with corresponding IDs: id="break-increment" and id="session-increment"', () => {
  const wrapper = mount(<PomodoroClock />);
  expect(wrapper.find('#break-increment')).toHaveLength(1);
  expect(wrapper.find('#session-increment')).toHaveLength(1);
});

it('there is an element with a corresponding id="break-length", which by default (on load) displays a value of 5', () => {
  const wrapper = mount(<PomodoroClock />);
  expect(wrapper.find('#break-length')).toHaveLength(1);
  expect(wrapper.find('#break-length').text()).toBe("5");
});

it('there is an element with a corresponding id="session-length", which by default (on load) displays a value of 25', () => {
  const wrapper = mount(<PomodoroClock />);
  expect(wrapper.find('#session-length')).toHaveLength(1);
  expect(wrapper.find('#session-length').text()).toBe("25");
});

