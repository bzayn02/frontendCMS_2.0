import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar expand="md" bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            E-Store Admin
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
              <Link to="/" className="nav-link">
                Sign In
              </Link>
              <Link to="/" className="nav-link">
                Sign Out
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
