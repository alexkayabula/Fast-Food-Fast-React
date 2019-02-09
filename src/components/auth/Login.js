import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser} from '../../actions/authActions';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      notFoundUser: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      if (nextProps.errors.username) {
        this.setState({ usernameError: nextProps.errors.username });
      } else if (nextProps.errors.password) {
        this.setState({ passwordError: nextProps.errors.password });
      } else {
        this.setState({ notFoundUser: nextProps.errors.error });
      }
    } else {
      window.localStorage.setItem('access_token', loginUser.nextProps.user.token);
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  }

  render() {
    const { usernameError, passwordError, notFoundUser } = this.state;
    return (
      <section id="login" className="flex-grow-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className="display-4 text-center">Sign In</h3>
              <form noValidate onSubmit={this.onSubmit}>
                <span>{notFoundUser}</span>
                <div className="form-group">
                  <input
                    type="username"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  {usernameError && (
                    <div className="invalid-feedback">{usernameError}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {passwordError && (
                    <div className="invalid-feedback">{passwordError}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-warning btn-block mt-4"
                />
              </form>
              <div className="mt-2 text-right">
              </div>
              <div className="mt-4 text-center">
              </div>
              <div className="mt-4 text-right">
                <p className="">
                  Don't have an account? <Link to="/register" className="my-color">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Login.propType = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
