import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import './App.scss';
import { Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
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
          </Switch>
          <Footer />
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
