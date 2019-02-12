import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import './App.scss';
import { Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Menu from './components/menu/menu';
import Login from './components/auth/Login';
import Order from './components/order/order';
import MyOrders from './components/order/myOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <NavBar />
          <ToastContainer />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/menu"  render={props =>
                this.props.isLoggedIn ? (
                  <Menu {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }/>
            <Route exact path="/order" render={props =>
                this.props.isLoggedIn ? (
                  <Order {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              } />
            <Route
              exact
              path="/order/history"
              render={props =>
                this.props.isLoggedIn ? (
                  <MyOrders {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isRequesting: state.isRequesting,
    isLoggedIn: state.currentUser.username
  };
}

export default connect(
  mapStateToProps,
  null
)(hot(module)(App));
