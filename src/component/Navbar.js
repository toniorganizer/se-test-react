import React from 'react'
import {Container, Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarUp = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <Container>
        <Navbar.Brand href="#"><img src="logo192.png" alt="..." /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#information">Information</Nav.Link>
            <Nav.Link as={Link} to="/data">Data</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarUp
