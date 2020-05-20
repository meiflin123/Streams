import React, {useEffect} from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom'
import history from '../../history';

const StreamDelete = props => {
  console.log(props)
  useEffect(() => {
    props.fetchStream(props.match.params.id)
  }, [])

  const renderActions = () =>{
    const id = props.match.params.id;
    return (
      <>
        <button onClick={ () => props.deleteStream(id) } className="ui negative button">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </>
    );
  };
  
  const renderContent = () => {
    if (!props.stream) {
      return "Are you sure you want to delete this stream?"
    }
    return `Are you sure you want to delete the stream with title: ${props.stream.title}`
  };

 
    return (
      <div>
        <Modal header="Delete Stream" 
               content= {renderContent() }
               actions={renderActions() }
               onDismiss={ () => history.push('/')}

        />
      </div>
    );
}

const mapStatesToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};


export default connect(mapStatesToProps, { fetchStream, deleteStream })(StreamDelete);