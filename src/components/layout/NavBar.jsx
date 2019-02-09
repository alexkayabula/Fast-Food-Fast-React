import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';

/**
 * Renders the navigation bar.
 */
export class NavBar extends Component {
  render() {
    return this.props.currentUser ? <LoggedIn /> : <LoggedOut />;
  }
}

function mapStateToProps(state) {  
  return {
    currentUser: state.currentUser.username
  };
}

export default connect(
  mapStateToProps,
  null
)(NavBar);
