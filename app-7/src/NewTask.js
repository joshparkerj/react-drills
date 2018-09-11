import React, { Component } from 'react';

class NewTask extends Component {

  handleChange = event => {
    this.props.updateInput(event.target.value);
  }
  handleClick = () => {
    this.props.updateList();
  }
  render() {
    return (
      <div className="new-task">
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>
          Add
        </button>
      </div>
    )
  }
}

export default NewTask;