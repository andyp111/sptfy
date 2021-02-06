import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

class MyNavbar extends React.Component{
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Styles>
                <Navbar fixed="top" bg="light" expand="lg">
                    <Nav.Item>Home</Nav.Item>
                    <Nav.Item>Home</Nav.Item>
                    <Nav.Item>Home</Nav.Item>
                </Navbar>
            </Styles>
        );
    }
}

export default MyNavbar