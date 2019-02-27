import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  // navigate to '/' path if any grey area is clicked.
  // handle event progagation.
  
  return ReactDOM.createPortal(
    <div onClick={ () => history.push('/') } className="ui dimmer modals visibale active">
      <div onClick={ e => e.stopPropagation() }className="ui standard modal visibale active">
        <div className="header">Delete Stream</div>
        <div className="content">
          <p>Are you sure you want to delete this stream?</p>
        </div>
        <div className="actions">
          <div className="ui negative button">DELETE</div>
          <div className="ui button">Cancel</div>

        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;