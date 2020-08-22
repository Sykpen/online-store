import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../actions";

class ProductItem extends Component {
  render() {
    const { title, price, amount, id, addToCart } = this.props;

    return (
      <Fragment>
        <div>
          <div>
            {title} : стоит {price} рублей можно купить {amount} килограмм.
          </div>
          <button className="btn btn-success" onClick={() => addToCart(id)}>
            В корзину
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductItem);
