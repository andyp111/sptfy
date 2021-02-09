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

  render() {
    return (
    <Router>
      <Styles>
        <Navbar expand="lg">
          <BsFillMusicPlayerFill />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/Playlist">Playlists</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/new">Discover New Songs</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
      <br />
        <Switch>
          <Route path="/home" component={Test}>
          </Route>
        </Switch>
    </Router>
    )
  }
}


export default MyNavbar