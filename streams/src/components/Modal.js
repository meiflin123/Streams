import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  // navigate to '/' path if any grey area is clicked.
  // handle event progagation.
  
  return ReactDOM.createPortal(
    <div onClick={ props.onDismiss } className="ui dimmer modals visibale active">
      <div onClick={ e => e.stopPropagation() }className="ui standard modal visibale active">
        <div className="header">{ props.header}</div>
        <div className="content">
          <p>{ props.content }</p>
        </div>
        <div className="actions">
          { props.actions }
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;