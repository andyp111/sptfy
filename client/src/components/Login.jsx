import React from 'React';
import axios from 'axios';

class Login extends React.Component {
  constructor() {
    super()

    this.state = {

    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault()
    window.location.href="http://localhost:3000/api/login"
  }

  render() {
    return (
      <div>
      <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}

export default Login;