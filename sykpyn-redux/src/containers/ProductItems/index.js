import React from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

const ProductItems = ({ storeProducts }) => {
  if (!storeProducts) {
    return <div>Информация появится по клику</div>;
  }
  return storeProducts.map((product) => (
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
  storeProducts: state.productItems.products,
});

export default connect(mapStateToProps, null)(ProductItems);
