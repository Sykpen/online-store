import React, { Component, Fragment } from "react";
import ProductItems from "../ProductItemsContainer";
import Cart from "../CartContainer";
import Slider from "../../components/Slider";
import { connect } from "react-redux";
import { showProducts, filter } from "../../actions";
import Filter from "../../components/FilterArea";

class MainSection extends Component {
  componentDidMount() {
    return this.props.showProducts();
  }

  render() {
    return (
      <Fragment>
        <Slider />
        <div className="container">
          <div className="pt-3 d-flex">
            <div className="d-flex justify-content-around align-items-center flex-grow-1 flex-wrap">
              <Filter filter={this.props.filter} showProducts={this.props.showProducts}/>
              <ProductItems />
            </div>
            <div className="flex-shrink-0">
              <Cart />
            </div>
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

export default connect(null, mapDispatchToProps)(MainSection);
