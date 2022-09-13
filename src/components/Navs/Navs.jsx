import React from 'react';
import './Navs.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../../src/assets/logo.svg';


const Navs = () => {
  return (
    <Container>
      <Navbar bg="light" className="Navbar" >
        <Navbar.Brand href="#home"><img src={logo} title="logo" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deets" className="border sign-up">Sign up</Nav.Link>
            <Nav.Link href="#memes" className="border sign-in"> Sign in </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navs;