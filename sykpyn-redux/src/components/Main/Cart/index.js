import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    const { totalPrice } = this.props;
    return (
      <Fragment>
        <div>
          <p>Корзина</p>
          {totalPrice}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.showInfo.totalPrice,
  };
};

export default connect(mapStateToProps)(Cart);
