import React, { Component } from 'react';
import Login from './Login'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  updateUsername = username => {
    this.setState({username: username});
  }
  updatePassword = password => {
    this.setState({password: password});
  }
  displayAlert = () => {
    console.log('trying to alert');
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Login
          updateUsername={this.updateUsername}
          updatePassword={this.updatePassword}
          displayAlert={this.displayAlert} />
      </div>
    );
  }
}

export default App;
