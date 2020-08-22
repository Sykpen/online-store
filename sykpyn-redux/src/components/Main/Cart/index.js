import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { removeAllFromCart } from "../../../actions";

class Cart extends Component {
  render() {
    const { totalPrice, removeAllFromCart } = this.props;
    return (
      <Fragment>
        <div>
          <p>Корзина</p>
          {totalPrice}
        </div>
        <button className='btn btn-danger' onClick={() => removeAllFromCart()}>Remove All</button>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.showInfo.totalPrice,
  };
};

const mapDispatchToProps = {
  removeAllFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
