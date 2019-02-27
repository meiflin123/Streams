import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index.js';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {


  onSubmit = formProps => {
    this.props.createStream(formProps)
  }
  
  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate)