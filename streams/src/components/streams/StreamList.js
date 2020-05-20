import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

const StreamList = (props) => {

  //fetch streams immediately after page rendered.
  useEffect(() => {
    props.fetchStreams();
  }, []);
  
  // have EDIT/DELETE if stream userId is current user Id
  const renderAdmin = stream => {
    console.log('stream', stream)
    return stream.userId === props.currentUserId? 
        <div className="right floated content">
          <Link to={`/stream/edit/${stream.id}`} className="ui button primary">
            EDIT
          </Link>
         
          <Link to={`/stream/delete/${stream.id}`} className="ui button negative">
            Delete
          </Link>
        </div> : <></>;
  };

  //create link to StreamCreate
  const renderCreate = () => {
    return props.isSignedIn?
        <div style={{ textAlign: 'right' }}>
          <Link to="/stream/new" className="ui button primary">
            Create Stream
          </Link>
        </div> : <></>
  }
  
  //map redux streams state to a list
  const renderList = () => {
    return props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          { renderAdmin(stream) }
          <i className="large middle aligned icon camera" />
          <div className="content">
          <Link to={`/stream/${stream.id}`} className="header">
            {stream.title}
          </Link>       
            <div className="description">
            {stream.description}
            </div>
          </div>
        </div>
      );
    });
  }
  

  //display a list of streams and button redirect to a form to create new stream
  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
        { renderCreate() }
    </div>
  );
};

const mapStatesToProps = state => {
  console.log('state', state.streams) 
  return { 
    streams: Object.values(state.streams), //output: Array [value1, value2, value3]
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};


export default connect(mapStatesToProps, { fetchStreams })(StreamList);