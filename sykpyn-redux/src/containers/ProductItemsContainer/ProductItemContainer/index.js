import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../actions";
import { Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ProductItem = ({ title, titleEN, price, amount, id, addToCart, image }) => {
  const { t, i18n } = useTranslation();

  const isProductEnded = () => {
    return amount === 0;
  };

  return (
    <Card style={{ width: "18rem", marginTop: "10px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{i18n.language === 'ru' ? title : titleEN}</Card.Title>
        <Card.Text>{t("cardText", { price: price, amount: amount })}</Card.Text>
        <Button
          variant="primary"
          className="btn btn-success"
          onClick={() => addToCart(id)}
          disabled={isProductEnded()}
        >
          {t("addToCart")}
        </Button>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductItem);
