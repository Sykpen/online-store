import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { cleanCart } from "../../actions/index";
import CartItem from "../../components/CartItem";

class Cart extends Component {
  render() {
    const { cleanCart, productsAddedToCart, showCart, products } = this.props;
    return (
      <Fragment>
        <div>
          <p>Корзина</p>
          {showCart
            ? productsAddedToCart.map((product) => (
                <CartItem
                  productPrice={product.price}
                  chosenProductTitle={product.title}
                  amountToOrder={product.totalAmountToOrder}
                  totalPrice={product.totalPriceForOneProduct}
                  id={product.id}
                  productsAmount={products.amount}
                />
              ))
            : "Заказов пока нет!"}
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
    productsAddedToCart: state.productItems.productsAddedToCart,
    showCart: state.productItems.showCart,
    products: state.productItems.products,
  };
};

const mapDispatchToProps = {
  cleanCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
