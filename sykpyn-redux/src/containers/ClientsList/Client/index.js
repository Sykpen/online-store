import React, { Component, Fragment } from "react";
import { Card } from "react-bootstrap";

class Client extends Component {
  render() {
    const {
      id,
      balance,
      bonus,
      email,
      first_name,
      last_name,
      nick_name,
    } = this.props;

    return (
      <Fragment>
        <Card
          style={{
            width: "24rem",
            marginTop: "10px",
            marginBottom: "10px",
            border: "1px solid #f8f8f8}",
          }}
        >
          <Card.Body>
            <Card.Title>Client: {id}</Card.Title>
            <Card.Text>
              <p>
                {last_name} {first_name} (Nickname: {nick_name}, email: {email})
              </p>
              <p>
                Balance: {balance} byn, bonus: {bonus}.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

export default Client;
