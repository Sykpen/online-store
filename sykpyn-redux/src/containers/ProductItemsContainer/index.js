import React from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItemContainer";

const ProductItems = ({ products }) => {
  if (!products) {
    return <div>Информации пока нет, перезагрузите сайт.</div>;
  }
  return products.map((product) => (
    <ProductItem
      name={product.name}
      title={product.title}
      price={product.price}
      amount={product.amount}
      key={product.id}
      id={product.id}
      image={product.image}
    />
  ));
};

const mapStateToProps = (state) => ({
  products: state.productItems.products,
});

export default connect(mapStateToProps, null)(ProductItems);
