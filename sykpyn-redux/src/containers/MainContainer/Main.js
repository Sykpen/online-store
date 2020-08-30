import React, { Component, Fragment } from "react";
import Header from "../../components/Header";

class Main extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Header />
        {children}
      </Fragment>
    );
  }
}

export default Main;
