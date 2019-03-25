import React from 'react';
import { mount } from 'enzyme';
import StreamCreate from '../streams/StreamCreate';
import Root from '../../Root';
import { Field }from 'redux-form'

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <StreamCreate />
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
  expect(wrapped.find('input').length).toEqual(2);

});

it('has a form that user can submit', () => {
  wrapped.find('form').simulate('submit', {
    {title: "create stream ", description: "test form"}
  })
  wrapped.update();
});

