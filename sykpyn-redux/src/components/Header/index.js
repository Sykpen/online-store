import React, { Component } from "react";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#sales">Акции</Nav.Link>
          <Nav.Link href="#contacts">Контакты</Nav.Link>
          <Nav.Link href="#aboutUS">О нас</Nav.Link>
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
