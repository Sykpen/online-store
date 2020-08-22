import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addToCart, addAllToCart } from "../../../actions";

class ProductItem extends Component {
  render() {
    const {
      title,
      price,
      amount,
      id,
      addToCart,
      addAllToCart,
      disableButton,
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
            disabled={disableButton}
          >
            В корзину
          </button>
          <button
            className="btn btn-success ml-3"
            onClick={() => addAllToCart(id)}
            disabled={disableButton}
          >
            Добавить все
          </button>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  disableButton: state.showInfo.disableButton,
});

const mapDispatchToProps = {
  addToCart,
  addAllToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
