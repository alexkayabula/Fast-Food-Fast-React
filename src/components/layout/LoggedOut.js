import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders the navigation bar when a user is logged out.
 */
class LoggedOut extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5 fixed-top " >
        <div className="container">
          <Link to="/" className="navbar-brand">
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
                <Link to="/login" className="navbar-brand btn btn-outline">
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  className="navbar-brand btn btn-outline"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default LoggedOut;
