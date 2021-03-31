// import React from 'react'
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
// import styled from 'styled-components'



// class MyNavbar extends React.Component{
//     constructor(props) {
//         super(props)
//     }


//     render() {
//         return (
//             <Navbar className="navbar" fixed="top" bg="light" expand="lg">
//                 <Nav.Item>Home</Nav.Item>
//                 <Nav.Item>Home</Nav.Item>
//                 <Nav.Item>Home</Nav.Item>
//             </Navbar>
//         );
//     }
// }

import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import store from '../redux/store/store.js'

const Styles = styled.div`
  .navbar { 
      background-color: #292f31; 
      display:flex; 
      flex-direction:row;
      border-radius: 15px;
      }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    display: flex;
    padding: 15px;
    &:hover { color: white; }
  }

  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }

  .nav-image {
    padding: 5px;
    max-width: 50px;
    max-height: 50px;
    position: absolute;
    right: 10px;
    border-radius: 25px;
  }
`;
export class MyNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userImage: store.getState().userInfo
    }
  }
  render() {
    console.log(this.state.userImage.usrImg);
    return (
      <div>
        <Styles>
          <Navbar expand="lg">
            <div style={{padding: '20px'}}>
              <BsFillMusicPlayerFill size={30} />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to='/aboutyou'>
                  <Nav.Item>About You</Nav.Item>
                </Link>
                <Link to='/playlist'>
                  <Nav.Item>Playlists</Nav.Item>
                </Link>
                <Link to='/new'>
                  <Nav.Item>Discover New Music</Nav.Item>
                </Link>
              </Nav>
            </Navbar.Collapse>
            <img className="nav-image" src={this.props.userImage} />
          </Navbar>
        </Styles>
        {/* <Dashboard followers={this.props.userFollowers} userImage={this.props.userImage} topTracks={this.props.topTracks} topArtists={this.props.topArtists} /> */}
      </div>
    )
  }
}


export default MyNavbar