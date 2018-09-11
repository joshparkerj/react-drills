import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask';
import Todo from './Todo';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      taskList: []
    }
  }
  updateInput = input => {
    this.setState({input: input});
  }
  updateList = () => {
    this.setState({taskList: this.state.taskList.concat([this.state.input])});
  }
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask updateList={this.updateList} updateInput={this.updateInput} />
        <Todo taskArray={this.state.taskList} />
      </div>
    );
  }
}

export default App;
