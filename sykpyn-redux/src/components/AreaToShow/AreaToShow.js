import React, { Fragment } from "react";
import { connect } from "react-redux";
import OneProduct from "../OneProduct/OneProduct";

const AreaToShow = ({ myName, myProducts }) => {
  if (myName === null) {
    return <div>Информация появится по клику</div>;
  }
  return myProducts.map((product) => (
    <OneProduct
      name={product.name}
      title={product.title}
      price={product.price}
      amount={product.amount}
      key={product.id}
    />
  ));
};

const mapStateToProps = (state) => {
  return {
    myName: state.showInfo.name,
    myProducts: state.showInfo.products,
  };
};

export default connect(mapStateToProps)(AreaToShow);
