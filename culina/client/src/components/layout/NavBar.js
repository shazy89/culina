import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { logout } from "../../actions/auth";

const NavBar = ({ logout, history, currentUser }) => {
  return (
    <Navbar
      collapseOnSelect
      className="navbarCulina"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} onClick={logout} href="/">
            Log Out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (store) => {
  return {
    currentUser: store.auth.user,
  };
};

export default connect(mapStateToProps, { logout })(NavBar);
