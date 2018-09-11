import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      dataList: [
        "strawberry",
        "vanilla",
        "chocolate",
        "blueberry",
        "peppermint",
        "rocky road",
        "butterscotch",
        "banana",
        "oreo"
      ],
      filteredList: []
    }
  }
  handleChange = event => {
    this.setState({
      filteredList: this.state.dataList.filter(e => {
        return e.includes(event.target.value);
      })
    })
  }
  eachItem = e => {
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
        <input onChange={this.handleChange} />
        <ul>
          {this.state.filteredList.map(this.eachItem)}
        </ul>
      </div>
    );
  }
}

export default App;
