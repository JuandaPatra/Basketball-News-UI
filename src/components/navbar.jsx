import React from 'react';
import { Navbar, Container, Nav, Image } from "react-bootstrap";

export const Navibar=()=>{
    return(
        <>
        <Navbar bg="light" expand="lg" >
        <Container>
          <Navbar.Brand href="#home">Sport-News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{marginLeft:"35%"}}>
              <Nav.Link href="#home">BROWSE</Nav.Link>
              <Nav.Link href="#link">CATEGORY</Nav.Link>
              <Nav.Link href="#link" className="login-btn">LOGIN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}