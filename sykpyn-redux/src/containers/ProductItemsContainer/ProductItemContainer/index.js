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

    const isProductEnded = () => {
      return this.props.amount === 0;
    };

    return (
      <Fragment>
        <div>
          <div>
            {title} : стоит {price} рублей можно купить {amount} штук.
          </div>
          <button
            className="btn btn-success"
            onClick={() => addToCart(id)}
            disabled={isProductEnded()}
          >
            В корзину
          </button>
          <button
            className="btn btn-success ml-3"
            onClick={() => addAllProductItemsToCart(id)}
            disabled={isProductEnded()}
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
