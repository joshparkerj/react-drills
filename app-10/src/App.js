import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './Products';
import Details from './Details';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav>
          <a href="/">Home</a>
        </nav>
        <Router>
          <Switch>
            <Route path='/details/:id' component={Details}/>
            <Route path='/' component={Products}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
