import React, { Component, Fragment } from "react";
import Order from "../Order";
import { Button } from 'react-bootstrap'

class OrderPack extends Component {
  render() {
    const clientOrdersList = [];
    let test = [];
    console.log(this.props.order)
    this.props.order.filter((order) => test.push(order.products_hash));
    console.log(test)
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
  // render() {
  //   const clientOrdersList = [];
  //   this.props.order &&
  //     this.props.order.forEach((order) => {
  //       clientOrdersList.push(
  //         <Order
  //           title={order.title}
  //           price={order.price}
  //           totalAmountToOrder={order.totalAmountToOrder}
  //           totalPriceForOneProduct={order.totalPriceForOneProduct}
  //           key={order.id}
  //           image={order.image}
  //         />
  //       );
  //     });
  //   return (
  //     <Fragment>
  //       <div className="test">
  //         {clientOrdersList}
  //         <Button>Repeat order</Button>
  //       </div>
  //     </Fragment>
  //   );
  // }
}

export default OrderPack;
