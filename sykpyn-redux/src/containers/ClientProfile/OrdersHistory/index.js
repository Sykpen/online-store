import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import OrderPack from "./OrderPack";

class ClientOrdersHistory extends Component {
  render() {
    const clientOrdersList = [];
    let ordersListAfterFilter = [];

    // let sortedClientOrders =
    //   this.props.ordersForOneClient &&
    //   this.props.ordersForOneClient
    //     .filter((order) => order.products_hash != null)
    //     .filter((order) => ordersListAfterFilter.push(order.products_hash));
                    let sortedClientOrders =
                    this.props.ordersForOneClient &&
                    this.props.ordersForOneClient
                      .filter((order) => order.products_hash && order.total_order_price != null)
                console.log(sortedClientOrders)
                            // .filter((order) => ordersListAfterFilter.push(order.products_hash));
  //   ordersListAfterFilter &&
  //     ordersListAfterFilter.forEach((order) => {
  //       clientOrdersList.push(<OrderPack order={order} />);
  //     });
  //   return <Fragment>{clientOrdersList}</Fragment>;
  // }

  sortedClientOrders &&
  sortedClientOrders.forEach((order) => {
    clientOrdersList.push(<OrderPack order={order} />);
  });
return <Fragment>{clientOrdersList}</Fragment>;
}
}

const mapStateToProps = (state) => ({
  ordersForOneClient: state.orders.ordersForOneClient,
});

export default connect(mapStateToProps, null)(ClientOrdersHistory);
