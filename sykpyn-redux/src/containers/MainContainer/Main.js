import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
<<<<<<< HEAD
import Slider from "../../components/Slider";
import { connect } from "react-redux";
import { showProducts, filter } from "../../actions";
import FilterArea from "../../components/FilterArea";
=======
>>>>>>> develop

class Main extends Component {
  render() {
<<<<<<< HEAD
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
=======
    const { children } = this.props;
    return (
      <Fragment>
        <Header />
        {children}
>>>>>>> develop
      </Fragment>
    );
  }
}

<<<<<<< HEAD
const mapDispatchToProps = {
  showProducts,
  filter,
};

export default connect(null, mapDispatchToProps)(Main);
=======
export default Main;
>>>>>>> develop
