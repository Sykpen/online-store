import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addToCart, addAllToCart } from "../../../actions";

class ProductItem extends Component {
  render() {
    const { title, price, amount, id, addToCart, addAllToCart } = this.props;

    return (
      <Fragment>
        <div>
          <div>
            {title} : стоит {price} рублей можно купить {amount} килограмм.
          </div>
          <button className="btn btn-success" onClick={() => addToCart(id)}>
            В корзину
          </button>
          <button
            className="btn btn-success ml-3"
            onClick={() => addAllToCart(id)}
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
  addAllToCart,
};

export default connect(null, mapDispatchToProps)(ProductItem);
