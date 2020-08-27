import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import "./cartItem.css";

class CartItem extends Component {
  render() {
    const {
      addOneMore,
      id,
      deleteOneProduct,
      removeChosenType,
      product,
    } = this.props;

    const isProductEnded = () => {
      return product.amount === 0;
    };

    const decreaseProductAmount = () => {
      return product.totalAmountToOrder <= 1;
    };

    return (
      <Fragment>
        <div>
          <div className="catItem_text">
            {product.title}: {product.price} x {product.totalAmountToOrder} ={" "}
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
              className="btn btn-success addOneMore"
              onClick={() => addOneMore(id)}
              disabled={isProductEnded()}
            >
              +
            </Button>
            {product.totalAmountToOrder}
            <Button
              variant="primary"
              className="btn btn-warning deleteOne"
              onClick={() => deleteOneProduct(id)}
              disabled={decreaseProductAmount()}
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
