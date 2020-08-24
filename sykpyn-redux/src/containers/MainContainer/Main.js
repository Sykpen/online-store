import React, { Component, Fragment } from "react";
import ProductItems from "../ProductItemsContainer";
import Cart from "../CartContainer";
import Header from "../../components/Header";
import Slider from "../../components/Slider";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Slider />
        <div className="container pt-3">
          <div className="d-flex justify-content-around align-items-center flex-wrap">
            <ProductItems />
          </div>
          <Cart />
        </div>
      </Fragment>
    );
  }
}

export default Main;
