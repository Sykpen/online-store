import React, { Component, Fragment } from "react";
import ProductItems from "../ProductItemsContainer";
import Cart from "../CartContainer";
import Slider from "../../components/Slider";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";

class MainSection extends Component {
  componentDidMount() {
    return this.props.fetchProducts();
  }

  render() {
    return (
      <Fragment>
        <Slider />
        <div className="container pt-3 d-flex">
          <div className="d-flex justify-content-around align-items-center flex-wrap">
            <ProductItems />
          </div>
          <div className="flex-shrink-0">
            <Cart />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(null, mapDispatchToProps)(MainSection);
