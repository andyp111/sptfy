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
    axios.get('/api/login')
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <button onClick={this.handleLogin}>Login</button>
    )
  }
}

export default Login;