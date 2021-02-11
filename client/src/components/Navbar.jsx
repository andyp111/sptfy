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
import Test from './Test.jsx';
import Dashboard from './Dashboard.jsx';

const Styles = styled.div`
  .navbar { 
      background-color: gray; 
      display:flex; 
      flex-direction:row;
      border-radius: 15px;
      }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    display: flex;
    padding: 10px 5px 10px 10px;
    &:hover { color: white; }
  }

  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export class MyNavbar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <Styles>
        <Navbar expand="lg">
          <BsFillMusicPlayerFill sz="large"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to='/aboutyou'>
                <Nav.Item>About You</Nav.Item>
              </Link>
              <Link to='/playlist'>
                <Nav.Item>Playlists</Nav.Item>
              </Link>
              <Link to='/new'>
                <Nav.Item>Discover New Songs</Nav.Item>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
      {/* <Dashboard followers={this.props.userFollowers} userImage={this.props.userImage} topTracks={this.props.topTracks} topArtists={this.props.topArtists} /> */}
      </div>
    )
  }
}


export default MyNavbar