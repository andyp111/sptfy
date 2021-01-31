import React , { useState, useEffect } from 'react';
import Dropdown from './Dropdown.jsx';
import axios from 'axios';
import queryString from 'query-string';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      serverData: {},
      filterString:'',
      clickedLogin: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    console.log(accessToken)

    // fetch('https://api.spotify.com/v1/me', {
    //   headers: {
    //     'Authorization': 'Bearer ' + accessToken
    //   }
    // })
    // .then(response => response.json())
    // .then(data => console.log(data));
    axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
    .then(result => this.setState({
      serverData: {user: {name: result.data.display_name}}
    }));
  }

  handleLogin(e) {
    this.setState({
      clickedLogin: !false
    })
    window.location.href="http://vpz-sptfy-backend.herokuapp.com/login";
    console.log('clicked')
    e.preventDefault();
  }

  render() {
    return (
      <div>
        {this.state.serverData.user ?
          <div>
            <h1>{this.state.serverData.user.name}'s playlists</h1>
            {this.state.serverData.user.playlists && 
              <div>
              Hello World
              </div>
            }
            </div>
            : <button onClick={() => window.location = 'http://vpz-sptfy-backend.herokuapp.com/login'}>Sign in</button>
        }
      </div>
    )
  }
}
//vpz-sptfy-backend.herokuapp.com/login
//user login to app -> homepage
//will need to edit frontend uri on heroku
export default App;