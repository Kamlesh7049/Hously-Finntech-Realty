import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-light py-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img
            src="https://your-logo-url.com/logo.png"
            alt="Hously Finntech Realty"
            // height="60"
            width="120"
          />
        </Navbar.Brand>

        {/* Navigation Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Bank Offers</Nav.Link>
            <Nav.Link href="#">Calculator</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>

          {/* Login Button */}
          <Button variant="dark" className="ms-3 px-4">
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
