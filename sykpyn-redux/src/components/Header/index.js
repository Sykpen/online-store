import React, { Component } from "react";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    debugger
    i18n.changeLanguage(language);
  };

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">LOGO</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#sales">{t("sales")}</Nav.Link>
        <Nav.Link href="#contacts">{t("contacts")}</Nav.Link>
        <Nav.Link href="#aboutUS">О нас</Nav.Link>
        <Button variant="outline-primary" onClick={() => changeLanguage("ru")}>
          RU
        </Button>
        <Button variant="outline-primary" onClick={() => changeLanguage("en")}>
          EN
        </Button>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder={t("search")}
          className="mr-sm-2"
        />
        <Button variant="outline-primary">{t("search")}</Button>
      </Form>
    </Navbar>
  );
}

export default Header;
