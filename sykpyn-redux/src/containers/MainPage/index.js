import React, { Component, Fragment } from "react";
import ProductItems from "../ProductItemsContainer";
import Cart from "../CartContainer";
import Slider from "../../components/Slider";
import { connect } from "react-redux";
import { showProducts, filterProducts } from "../../actions";
import FilterArea from "../../components/FilterArea";

class MainSection extends Component {
  componentDidMount() {
    return this.props.showProducts();
  }

  render() {
    const { stableProductCopy } = this.props;
    return (
      <Fragment>
        <Slider />
        <div className="container">
          <div className="pt-3 d-flex">
            <div className="d-flex justify-content-around align-items-center flex-grow-1 flex-wrap">
              <FilterArea
                filterProducts={this.props.filterProducts}
                showProducts={this.props.showProducts}
                stableProductCopy={stableProductCopy}
              />
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

const mapStateToProps = (state) => {
  return {
    stableProductCopy: state.productItems.stableProductCopy,
  };
};

const mapDispatchToProps = {
  showProducts,
  filterProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
