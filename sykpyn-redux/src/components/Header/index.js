import React from "react";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">LOGO</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">Главная</Link>
        <Link to="/contacts">{t("contacts")}</Link>
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
