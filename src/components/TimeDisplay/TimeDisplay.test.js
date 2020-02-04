import React from 'react';
import { shallow } from 'enzyme';

import TimeDisplay from './index.js';

it('it has an element with id="break-label" that contains a string (e.g. "Break Length")', () => {
  const wrapper = shallow(<TimeDisplay type="break" />);
  expect(wrapper.find('#break-label')).toHaveLength(1);
});

it('it has an element with id="session-label" that contains a string (e.g. "Break Length")', () => {
    const wrapper = shallow(<TimeDisplay type="session" />);
    expect(wrapper.find('#session-label')).toHaveLength(1);
  });