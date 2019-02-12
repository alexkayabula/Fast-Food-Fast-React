/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Display from './Display';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';


export class LoggedIn extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5 fixed-top">
          <div className="container">
            <Link to="#" className="navbar-brand">
              Fast Food Fast
            </Link>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/menu" className="nav-link" className="navbar-brand btn">
                    MENU
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/order" className="nav-link"  className="navbar-brand btn">
                    ORDER
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/order/history" onClick={() => window.location = '/order/history'} className="nav-link" className="navbar-brand btn btn">
                    ORDER HISTORY
                  </Link>
                </li>
                
                <li className="nav-item">
                  <button
                    className="navbar-brand btn btn-outline-light"
                    onClick={() => {
                      this.props.logoutUser();
                      this.props.history.push('/');
                    }}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Display />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { logoutUser }
)(withRouter(LoggedIn));
