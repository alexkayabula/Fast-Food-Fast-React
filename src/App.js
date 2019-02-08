import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Fast Food Fast</h1>
      </div>
    );
  }
}

export default hot(module)(App);