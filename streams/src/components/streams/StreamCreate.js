import React from 'react';
import { Field, reduxForm } from 'redux-form'; 
import { connect } from 'react-redux';
import { createStream } from '../../actions/index.js';

class StreamCreate extends React.Component {

  // when user has touched the form and error, display error.
  renderError({ error, touched }) {
    if(touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }

  }
  

  renderInput = ({ input, label, meta }) => {
    const className = `field  ${meta.error && meta.touched? 'error' : ''}`
    console.log(input, label, meta.touched)

    // add input from formProps as property to input element (cuz need value and onChange)
    // display error if any

    return (
      <div className={className}>
        <label>{ label }</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = formProps => {
    console.log(formProps);
    this.props.createStream(formProps)
  }
  
  render() {
    //use handleSubmit from redux-form to handle event
    //disable semantic ui's default feature of hiding error
    //pass label to renderInput

    return (
       <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
         <Field name="title" component={this.renderInput} label="Enter Title"/>
         <Field name="description" component={this.renderInput} label="Enter Description"/>
         <button className="ui button primary">Submit</button>

       </form>
    );
  }
}

// define validate function outside component
  // empty object --> no error
  // object --> error, reduxform matches Field name and pass error to this.renderInput.

const validate = formProps => {
  const errors = {}
  if (!formProps.title) {
    errors.title = "You must enter a title";
  }
  if (!formProps.description) {
    errors.description = "You must enter a description";
  }
  return errors;
}

// connect redux form with StreamCreate
const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped)