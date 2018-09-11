import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      dataList: [
        "react",
        "angular",
        "vue",
        "django",
        "flask",
        "rails",
        "zope",
        "node",
        "express"
      ]
    }
  }
  eachItem(e,i){
    console.log(e);
    return (
      <li><h2>{e}</h2></li>
    )
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
        <ul>
            {this.state.dataList.map(this.eachItem)}
          </ul>
      </div>
    );
  }
}

export default App;
