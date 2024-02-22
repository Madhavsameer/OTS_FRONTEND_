import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaDelicious } from "react-icons/fa";


export default function Navbarr() {
  return (
    <div>

<Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
      <Link className="navbar-brand" to="/">
      <FaDelicious />
            #UP_TURN
          </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          
          <Nav   >
          <Link className="btn btn-outline-light" to="/adduser">
            Register
          </Link>
          <Nav.Link href="#"></Nav.Link>

          <Link className="btn btn-outline-light" to="/finduser">
            Login
          </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    </div>
  );
}
