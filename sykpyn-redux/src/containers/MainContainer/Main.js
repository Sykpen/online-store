import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setStoreFromLocalStorage } from "../../actions/authorization";

class Main extends Component {
  render() {
    this.props.setStoreFromLocalStorage();
    const { children } = this.props;
    return <Fragment>{children}</Fragment>;
  }
}

const mapDispatchToProps = { setStoreFromLocalStorage };

export default connect(null, mapDispatchToProps)(Main);
