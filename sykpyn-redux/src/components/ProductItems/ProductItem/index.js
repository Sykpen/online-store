import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addToCart, addAllProductItemsToCart } from "../../../actions";

class ProductItem extends Component {
  render() {
    const {
      title,
      price,
      amount,
      id,
      addToCart,
      addAllProductItemsToCart,
    } = this.props;

    return (
      <Fragment>
        <div>
          <div>
            {title} : стоит {price} рублей можно купить {amount} килограмм.
          </div>
          <button
            className="btn btn-success"
            onClick={() => addToCart(id)}
            disabled={amount === 0}
          >
            В корзину
          </button>
          <button
            className="btn btn-success ml-3"
            onClick={() => addAllProductItemsToCart(id)}
            disabled={amount === 0}
          >
            Добавить все
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  addToCart,
  addAllProductItemsToCart,
};

export default connect(null, mapDispatchToProps)(ProductItem);
