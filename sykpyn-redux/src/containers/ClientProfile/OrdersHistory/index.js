import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import OrderPack from "./OrderPack";

class ClientOrdersHistory extends Component {
  render() {
    const clientOrdersList = [];
    let ordersListAfterFilter = [];

    let sortedClientOrders =
      this.props.ordersForOneClient &&
      this.props.ordersForOneClient
        .filter((order) => order.products_hash != null)
        .filter((order) => order.total_order_price != null);

    sortedClientOrders &&
      sortedClientOrders.forEach((order) => {
        if (
          order.products_hash[order.products_hash.length - 1] ===
            order.total_order_price ||
          order.products_hash[order.products_hash.length - 1] === order.id
        ) {
          return;
        } else {
          order.products_hash.push(order.id, order.total_order_price);
        }
      });

    sortedClientOrders &&
      sortedClientOrders.forEach((order) =>
        ordersListAfterFilter.push(order.products_hash)
      );

    ordersListAfterFilter &&
      ordersListAfterFilter.forEach((order) => {
        clientOrdersList.push(<OrderPack order={order} />);
      });
    return <Fragment>{clientOrdersList}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
  ordersForOneClient: state.orders.ordersForOneClient,
});

export default connect(mapStateToProps, null)(ClientOrdersHistory);
