import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

const listItems = [];

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      todoList: []
    }
  }
  handleChange = event => {
    this.setState({input: event.target.value});
  }
  handleClick = () => {
    listItems.push(this.state.input);
    this.setState({todoList: listItems});
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
        <div>
        <h1>My to-do list:</h1>
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick} >
          Add
        </button>
        </div>
        <Todo tasksArray={this.state.todoList} />
      </div>
    );
  }
}

export default App;
