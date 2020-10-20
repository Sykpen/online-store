import React, { Component, Fragment } from "react";
import { Card, Button } from "react-bootstrap";

class Order extends Component {
  render() {
    const {
      id,
      title,
      price,
      totalAmountToOrder,
      totalPriceForOneProduct,
      image,
    } = this.props;

    return (
      <Fragment>
        <Card
          style={{
            width: "18rem",
            marginTop: "10px",
            border: "1px solid #f8f8f8}",
          }}
        >
          <Card.Img className="imageInOrderHistory" variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {price} X {totalAmountToOrder} = {totalPriceForOneProduct}
            </Card.Text>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

export default Order;
