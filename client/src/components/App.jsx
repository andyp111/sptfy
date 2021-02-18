import React , { useState, useEffect } from 'react';
import Dropdown from './Dropdown.jsx';
import PlaylistList from './PlaylistList.jsx'
import Player from './Player.jsx';
import MyNavbar from './Navbar.jsx';
import axios from 'axios';
import queryString from 'query-string';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Test from './Test.jsx';
import Dashboard from './Dashboard.jsx';
import UserInfo from './UserInfo.jsx';
import store from '../redux/store/store.js';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: store.getState().userInfo.username,
      userImage: store.getState().userInfo.userImg,
      filterString:'',
      accessToken: '',
      clicked: false
    }
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  componentDidMount() {
  }

  onLoginClick() {
    this.setState({
      clicked: true
    })
    window.location = 'http://vpz-sptfy-backend.herokuapp.com/login';
  }

  render() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    return (
      // <div>
      //   <button onClick={() => window.location = 'http://vpz-sptfy-backend.herokuapp.com/login'}>
      //   Sign in
      //   </button>
      //   <UserInfo />
      //   <PlaylistList />
      //   <Dashboard />
      // </div>
      <Router>
      <div>
        {accessToken ?
          <div>
            <h1>{this.state.username}'s Dashboard</h1>
            <div className="navbar-main"> 
              <MyNavbar accessToken={this.state.accessToken} userImage={this.state.userImage}/>
                {/* {this.state.userFollowers ? <Dashboard followers={this.state.userFollowers} userImage={this.state.userImage} topTracks={this.state.topTracks} topArtists={this.state.topArtists}/>
                : <div>loading...</div>} */}
                {/* <Dashboard /> */}
                <UserInfo />
                <Switch>
                  <Route path = "/aboutyou" component={Dashboard}/>
                </Switch>
              <Switch>
                <Route path="/playlist" component={PlaylistList}/>
                
              </Switch>
              <Switch>
                <Route path="/new" component={Test} />
              </Switch>
            </div>
          </div>
            : <button onClick={this.onLoginClick}>Sign in</button>
        }
      </div>
      </Router>
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

//look up modal and to play music when playlist click
//look up redux with nav bar - react router