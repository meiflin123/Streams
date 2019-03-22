import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import GoogleAuth from '../GoogleAuth';
import { Link } from 'react-router-dom';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Header />);
});

it('shows GoogleAuth Component',() => {
  expect(wrapped.find(GoogleAuth).length).toEqual(1);
});

it('has a Link', () => {
  expect(wrapped.find(Link).length).toEqual(1);
});