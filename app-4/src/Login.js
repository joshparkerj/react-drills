import React, { Component } from 'react';

class Login extends Component {
  handleUsername = event => {
    this.props.updateUsername(event.target.value);
  }
  handlePassword = event => {
    this.props.updatePassword(event.target.value);
  }
  handleClick = () => {
    this.props.displayAlert();
  }
  render(){
    return (
      <div className="login">
        <input onChange={this.handleUsername} />
        <input onChange={this.handlePassword} />
        <button onClick={this.handleClick}>
          Login
        </button>
      </div>
    )
  }
}

export default Login;