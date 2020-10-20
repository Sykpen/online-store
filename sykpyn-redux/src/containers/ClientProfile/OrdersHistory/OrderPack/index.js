import React, { Component, Fragment } from "react";
import Order from "../Order";
import { Button } from "react-bootstrap";

class OrderPack extends Component {
  render() {
    const clientOrdersList = [];
    let clientArray = [];
    this.props.order.filter((order) => clientArray.push(order.products_hash));
    this.props.order &&
      this.props.order.forEach((order) => {
        clientOrdersList.push(
          <Order
            title={order.title}
            price={order.price}
            totalAmountToOrder={order.totalAmountToOrder}
            totalPriceForOneProduct={order.totalPriceForOneProduct}
            key={order.id}
            image={order.image}
          />
        );
      });
    return (
      <Fragment>
        <div className="test">
          {clientOrdersList}
          <Button>Repeat order</Button>
        </div>
      </Fragment>
    );
  }
}

export default OrderPack;
