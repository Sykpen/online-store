import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import "./cartItem.css";

class CartItem extends Component {
  render() {
    const {
      addOneProduct,
      id,
      deleteOneProduct,
      removeChosenType,
      product,
      i18n,
    } = this.props;

    const isProductEnded = () => {
      return product.amount === 0;
    };

    const canProductAmountDecrease = () => {
      return product.totalAmountToOrder <= 1;
    };

    return (
      <Fragment>
        <div>
          <div className="catItem_text">
            {i18n.language === "ru" ? product.title : product.titleEN}:{" "}
            {product.price} x {product.totalAmountToOrder} ={" "}
            {product.totalPriceForOneProduct}{" "}
            <Button
              variant="primary"
              className="btn btn-danger"
              onClick={() => removeChosenType(id)}
            >
              X
            </Button>
          </div>
          <div className="buttons">
            <Button
              variant="primary"
              className="btn btn-success addOneProduct"
              onClick={() => addOneProduct(id)}
              disabled={isProductEnded()}
            >
              +
            </Button>
            {product.totalAmountToOrder}
            <Button
              variant="primary"
              className="btn btn-warning deleteOne"
              onClick={() => deleteOneProduct(id)}
              disabled={canProductAmountDecrease()}
            >
              -
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CartItem;
