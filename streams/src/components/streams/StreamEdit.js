import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams, editStream } from '../../actions/index.js';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {

  componentDidMount() {
    this.props.fetchStreams()
  };

  onSubmit = (formProps)=> {
    //console.log(formProps)
    this.props.editStream(this.props.match.params.id, formProps)
    
  }
  
  render() {
    if (!this.props.stream) {
      return <div>Loading</div>
    };

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.streams[ownProps.match.params.id])
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { editStream, fetchStreams })(StreamEdit)