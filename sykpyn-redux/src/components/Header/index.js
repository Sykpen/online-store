import React from "react";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { loginClient, logoutClient } from "../../actions/authorization";
import { Route, Redirect, useHistory } from "react-router-dom";

function Header({ loginClient, logoutClient, currentLoginClientId }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  let history = useHistory();

  const redirect = () => {
    history.push("/login");
  };

  return (
    <Navbar bg="light" variant="light" sticky="top" expand="md">
      <Navbar.Brand href="#home">
        <img
          className="logo"
          src="https://image.flaticon.com/icons/png/512/27/27305.png"
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="link" to="/">
            Главная
          </Link>
          <Link className="link" to="/contacts">
            {t("contacts")}
          </Link>
          <Link className="link" to="/client_profile">
            {t("clientProfile")}
          </Link>
        </Nav>
        <Button variant="outline-primary" onClick={() => changeLanguage("ru")}>
          RU
        </Button>
        <Button variant="outline-primary" onClick={() => changeLanguage("en")}>
          EN
        </Button>
        {currentLoginClientId ? (
          <Button variant="outline-primary" onClick={() => logoutClient()}>
            {t("logout")}
          </Button>
        ) : (
          <Button variant="outline-primary" onClick={redirect}>
            {t("login")}
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = (state) => {
  return {
    currentLoginClientId: state.authorization.currentLoginClientId,
  };
};

const mapDispatchToProps = { loginClient, logoutClient };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
