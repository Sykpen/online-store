import React from "react";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { loginClient, logoutClient } from "../../actions/authorization";

function Header({ loginClient, logoutClient }) {
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
      <Button variant="outline-primary">{t("search")}</Button>
      <Button variant="outline-primary" onClick={() => loginClient()}>
        {t("login")}
      </Button>
      <Button variant="outline-primary" onClick={() => logoutClient()}>
        {t("logout")}
      </Button>
    </Navbar>
  );
}

const mapDispatchToProps = { loginClient, logoutClient };

export default connect(null, mapDispatchToProps)(Header);
