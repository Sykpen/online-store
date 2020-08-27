import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  cleanCart,
  addOneMore,
  deleteOneProduct,
  removeChosenType,
} from "../../actions/index";
import CartItem from "../../components/CartItem";
import "./cart.css";

class Cart extends Component {
  render() {
    const {
      cleanCart,
      productsAddedToCart,
      showCart,
      addOneMore,
      deleteOneProduct,
      removeChosenType,
    } = this.props;
    return (
      <Fragment>
        <div className="cart_main">
          <p className="h5">
            Корзина{" "}
            <svg width="32" height="32" viewBox="0 0 32 32">
              <path
                d="M11.2 23.2c-1.32 0-2.4 1.08-2.4 2.4 0 1.32 1.08 2.4 2.4 2.4 1.32 0 2.4-1.08 2.4-2.4 0-1.32-1.08-2.4-2.4-2.4zM4 4v2.4h2.4l4.32 9.12-1.68 2.88c-.12.36-.24.84-.24 1.2 0 1.32 1.08 2.4 2.4 2.4h14.4v-2.4H11.68c-.12 0-.24-.12-.24-.24v-.12l1.08-2.04h8.88c.96 0 1.68-.48 2.04-1.2l4.32-7.8c.24-.24.24-.36.24-.6 0-.72-.48-1.2-1.2-1.2H9.04L7.96 4H4zm19.2 19.2c-1.32 0-2.4 1.08-2.4 2.4 0 1.32 1.08 2.4 2.4 2.4 1.32 0 2.4-1.08 2.4-2.4 0-1.32-1.08-2.4-2.4-2.4z"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </svg>
          </p>
          {showCart
            ? productsAddedToCart.map((product) => (
                <CartItem
                  id={product.id}
                  product={product}
                  addOneMore={addOneMore}
                  deleteOneProduct={deleteOneProduct}
                  removeChosenType={removeChosenType}
                />
              ))
            : "Заказов пока нет!"}
        </div>
        <button
          className="btn btn-danger remove_all"
          onClick={() => cleanCart()}
        >
          Remove All
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsAddedToCart: state.productItems.productsAddedToCart,
    showCart: state.productItems.showCart,
  };
};

const mapDispatchToProps = {
  cleanCart,
  addOneMore,
  deleteOneProduct,
  removeChosenType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
