import React, { Component, Fragment } from "react";

class OneProduct extends Component {
  render() {
    const { title, price, amount } = this.props;
    return (
      <Fragment>
        <div>
          {title} : стоит {price} рублей можно купить {amount} килограмм.
        </div>
      </Fragment>
    );
  }
}

export default OneProduct;
