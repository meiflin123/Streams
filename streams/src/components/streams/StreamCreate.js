import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index.js';
import StreamForm from './StreamForm';

const StreamCreate = props => {

  const onSubmit = formProps => {
    console.log('formProps', formProps);
    props.createStream(formProps)
  }

  return (
    <>
      <h3>Create Stream</h3>
      <StreamForm onSubmit={onSubmit}/>
    </>
  );
}

export default connect(null, { createStream })(StreamCreate)