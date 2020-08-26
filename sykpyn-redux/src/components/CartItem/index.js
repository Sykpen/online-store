import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addOneMore, deleteOneProduct, removeChosenType } from "../../actions";
import "./cartItem.css";

class CartItem extends Component {
  render() {
    const {
      productPrice,
      chosenProductTitle,
      amountToOrder,
      totalPrice,
      addOneMore,
      id,
      deleteOneProduct,
      removeChosenType,
      productAmount,
    } = this.props;

    const isProductEnded = () => {
      return productAmount === 0;
    };

    const test = () => {
      return amountToOrder <= 1;
    };

    return (
      <Fragment>
        <div>
          <div className="catItem_text">
            {chosenProductTitle}: {productPrice} x {amountToOrder} ={" "}
            {totalPrice}{" "}
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
            {amountToOrder}
            <Button
              variant="primary"
              className="btn btn-warning deleteOne"
              onClick={() => deleteOneProduct(id)}
              disabled={test()}
            >
              -
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  addOneMore,
  deleteOneProduct,
  removeChosenType,
};

export default connect(null, mapDispatchToProps)(CartItem);
