import React, { Component, Fragment } from "react";
import ProductItems from "../ProductItemsContainer";
import Cart from "../CartContainer";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import { connect } from "react-redux";
import { showProducts, filter } from "../../actions";
import FilterArea from "../../components/FilterArea";

class Main extends Component {
  componentDidMount() {
    return this.props.showProducts();
  }

  render() {
    const { filter, showProducts } = this.props;
    return (
      <Fragment>
        <Header />
        <Slider />
        <div className="container pt-3 d-flex">
          <div className="d-flex justify-content-around align-items-center flex-wrap">
            <FilterArea filter={filter} showProducts={showProducts} />
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
  showProducts,
  filter,
};

export default connect(null, mapDispatchToProps)(Main);
