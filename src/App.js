import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);