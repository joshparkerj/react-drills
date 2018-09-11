import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './Signup';
import Details from './Details';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav>
          <a href="/">Home</a>
          <a href="/signup">Sign Up</a>
          <a href="/details">Details</a>
        </nav>
        <Router>
          <Switch>
            <Route path='/signup' component={Signup}/>
            <Route path='/details' component={Details}/>
            <Route path='/' component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
