import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setStoreFromLocal } from "../../actions/authorization";

class Main extends Component {
  render() {
    this.props.setStoreFromLocal();
    const { children } = this.props;
    return <Fragment>{children}</Fragment>;
  }
}

const mapDispatchToProps = { setStoreFromLocal };

export default connect(null, mapDispatchToProps)(Main);
