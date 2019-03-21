import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../Header';
it('shows a header', () => {
  const wrapped = shallow(<App />)
  expect(wrapped.find(Header).length).toEqual(1);
});