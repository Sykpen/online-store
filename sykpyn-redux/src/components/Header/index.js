import React, { Component } from "react";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand to="/home">LOGO</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">Главная</Link>
          <Link to="/contacts">Контакты</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default Header;
