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
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
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
