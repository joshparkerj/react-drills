import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ''
    };
  }
  updateText = input => {
    this.setState({userInput: input.target.value})
  }
  render() {
    return (
      <div className="App">
        <input className="user-input" onChange={this.updateText} />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.userInput}</h2>
        </div>
        <div className="crazy-land">
          <div className="crazy-area num1">{this.state.userInput}</div>
          <div className="crazy-area num2">{this.state.userInput}</div>
          <div className="crazy-area num3">{this.state.userInput}</div>
          <div className="crazy-area num4">{this.state.userInput}</div>
          <div className="crazy-area num5">{this.state.userInput}</div>
          <div className="crazy-area num6">{this.state.userInput}</div>
          <div className="crazy-area num7">{this.state.userInput}</div>
          <div className="crazy-area num8">{this.state.userInput}</div>
          <div className="crazy-area num9">{this.state.userInput}</div>
          <div className="crazy-area num10">{this.state.userInput}</div>
          <div className="crazy-area num11">{this.state.userInput}</div>
          <div className="crazy-area num12">{this.state.userInput}</div>
        </div>
      </div>
    );
  }
}

export default App;
