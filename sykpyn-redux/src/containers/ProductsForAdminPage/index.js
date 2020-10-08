import React, { Component, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import ProductForAdminPage from "./ProductForAdminPage";
import ProductChangeModal from "../Modal/updateProductModal";
import { fetchProducts } from "../../actions";

class ProductsForAdminPage extends Component {
  render() {
    const Product_cards = [];
    this.props.products &&
      this.props.products.forEach((product) => {
        Product_cards.push(
          <ProductForAdminPage
            name={product.name}
            title={product.title}
            price={product.price}
            amount={product.amount}
            key={product.id}
            id={product.id}
            image={product.image}
          />
        );
      });
    return (
      <Fragment>
        {Product_cards}
        <ProductChangeModal />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productItems.products,
});

const mapDispatchToProps = (state) => ({
  fetchProducts,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsForAdminPage);
