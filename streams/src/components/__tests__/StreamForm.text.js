import React from 'react';
import { mount } from 'enzyme';
import StreamForm from '../streams/StreamForm';
import Root from '../../Root';
import { Field }from 'redux-form'

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <StreamForm />
    </Root>
    );
});

afterEach(() => {
  wrapped.unmount();
});

it('has 1 form, 2 Fields, and 1 button', () => {
  expect(wrapped.find('form').length).toEqual(1);
  expect(wrapped.find(Field).length).toEqual(2);
  expect(wrapped.find('button').length).toEqual(1);
});

