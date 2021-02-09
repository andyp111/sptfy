import React , { useState, useEffect } from 'react';
import Dropdown from './Dropdown.jsx';
import Playlists from './Playlists.jsx'
import Player from './Player.jsx';
import MyNavbar from './Navbar.jsx';
import axios from 'axios';
import queryString from 'query-string';





class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      filterString:'',
      accessToken: '',
      playlists: [],
      playerData: [],
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
      username: result.data.display_name
    }));

    axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
    .then(result => 
      this.setState({
        playlists: result.data.items.map(item => ({
          name: item.name,
          image: item.images[0].url,
          playlistId: item.id
        }))
      })
    )

  }


  render() {
    return (
      <div>
        {this.state.username ?
          <div>
            <h1>{this.state.username}'s Dashboard</h1>
            <div className="navbar-main"> 
              <MyNavbar />
            </div>
            <div className="container">
            {this.state.playlists.map((name, index) => {
              return (
                <div className="playlist-main" key={index}>
                  <Playlists playlist={name} access={this.state.accessToken}/>
                </div>
              )
            })}
            </div>
            {/* <Player /> */}
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