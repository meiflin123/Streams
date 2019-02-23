import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


class GoogleAuth extends React.Component {
  
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1078383896600-roekpqblim0bsl1lamo5cckec1dgv22o.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        //obtain methods from gapi.auth2
        this.auth = window.gapi.auth2.getAuthInstance();
        // change sign in state of app according to the gapi auth state
        this.onAuthChange(this.auth.isSignedIn.get());
        // automatically update sign in state of the app.
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  };

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };
  // if sign in button is click, invoke sign in pop-up
  onSignInClick = () => {
    this.auth.signIn();
  };
  // if sign out button is click, invoke sign out pop-up
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    console.log(this.props.isSignedIn)
    //if state is true, render sign out button
      //else, render sign in button
    if (this.props.isSignedIn) {
      return (
        <button onClick={ this.onSignOutClick } className="ui red google button">
          <i className="google icon"/>
          sign out
        </button>
      )} else { 
        return (
          <button onClick={ this.onSignInClick } className="ui red google button">
            <i className="google icon"/>
            sign in
          </button>
        );
      }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  };
};

const mapStatesToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}
export default connect(mapStatesToProps, { signIn, signOut })(GoogleAuth);