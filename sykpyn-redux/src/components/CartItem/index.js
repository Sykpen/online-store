import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addOneMore, deleteOneProduct, removeChosenType } from "../../actions";

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
    } = this.props;
    return (
      <Fragment>
        <div>
          {chosenProductTitle}: {productPrice} x {amountToOrder} = {totalPrice}
          <Button
            variant="primary"
            className="btn btn-success"
            onClick={() => addOneMore(id)}
          >
            +
          </Button>
          <Button
            variant="primary"
            className="btn btn-warning"
            onClick={() => deleteOneProduct(id)}
          >
            -
          </Button>
          <Button
            variant="primary"
            className="btn btn-danger"
            onClick={() => removeChosenType(id)}
          >
            X
          </Button>
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
