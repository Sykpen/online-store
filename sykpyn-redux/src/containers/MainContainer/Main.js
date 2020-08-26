import React, { Component, Fragment } from "react";
import ProductItems from "../ProductItemsContainer";
import Cart from "../CartContainer";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import { connect } from "react-redux";
import { showProducts } from "../../actions";

class Main extends Component {
  componentDidMount() {
    return this.props.showProducts();
  }

  render() {
    return (
      <Fragment>
        <Header />
        {/* <Slider /> */}
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
  showProducts,
};

export default connect(null, mapDispatchToProps)(Main);
