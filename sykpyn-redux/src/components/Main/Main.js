import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { showInfo } from "../../actions";
import ProductItems from "../ProductItems";
import Cart from "../../containers/Cart";

class Main extends Component {
  render() {
    const { showInfo } = this.props;
    return (
      <Fragment>
        <div className="container pt-3">
          <button className="btn btn-primary" onClick={() => showInfo()}>
            Показать инфу
          </button>
          <ProductItems />
          <Cart />
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  showInfo,
};

export default connect(null, mapDispatchToProps)(Main);
