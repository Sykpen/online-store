import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { cleanCart } from "../../actions/index";

class Cart extends Component {
  render() {
    const { totalPrice, cleanCart } = this.props;
    return (
      <Fragment>
        <div>
          <p>Корзина</p>
          {totalPrice}
        </div>
        <button className="btn btn-danger" onClick={() => cleanCart()}>
          Remove All
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.productItems.totalPrice,
  };
};

const mapDispatchToProps = {
  cleanCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
