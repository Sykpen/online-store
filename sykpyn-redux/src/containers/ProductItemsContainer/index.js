import React from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItemContainer";

const ProductItems = ({ products }) => {
  if (!products) {
    return <div>Информация появится по клику</div>;
  }
  return products.map((product) => (
    <ProductItem
      name={product.name}
      title={product.title}
      price={product.price}
      amount={product.amount}
      key={product.id}
      id={product.id}
    />
  ));
};

const mapStateToProps = (state) => ({
  products: state.productItems.products,
});

export default connect(mapStateToProps, null)(ProductItems);
