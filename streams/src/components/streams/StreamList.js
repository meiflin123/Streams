import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {

  //fetch streams immediately after page rendered.
  componentDidMount() {
    this.props.fetchStreams();
  };
  
  // have EDIT/DELETE if stream userId is current user Id
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/stream/edit/${stream.id}`} className="ui button primary">
            EDIT
          </Link>
         
          <button className="ui button negative">
            DELETE
          </button>
        </div>
      );
    }
  };

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/stream/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    };
  }
  
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>

          { this.renderAdmin(stream) }
         
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">
            {stream.description}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
          { this.renderCreate() }

      </div>
    );

  };
  
};

const mapStatesToProps = state => {
  return { 
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};


export default connect(mapStatesToProps, { fetchStreams })(StreamList);