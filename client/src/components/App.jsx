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
      accessToken: '',
    }
  }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    this.setState({
      accessToken: accessToken
    })
  
    axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
    .then(result => this.setState({
      serverData: {user: {name: result.data.display_name}}
    }));

  }


  render() {
    return (
      <div>
        {this.state.serverData.user ?
          <div>
            <h1>{this.state.serverData.user.name}'s Dashboard</h1>
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

//user can search a song to play
//user can add songs to playlist from recommended
//user can join room and chat