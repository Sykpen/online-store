import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteChosenProduct,
  updateChosenProduct,
} from "../../../actions/admin";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { compose } from "redux";

class ProductItemForAdminPage extends Component {
  render() {
    const {
      title,
      id,
      deleteChosenProduct,
      updateChosenProduct,
      history,
    } = this.props;

    return (
      <Card style={{ width: "18rem", marginTop: "10px" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text> Product id - {id}</Card.Text>
          <Button
            variant="primary"
            className="btn btn-danger"
            onClick={() => deleteChosenProduct(id, history)}
          >
            Delete
          </Button>
          <Button
            variant="primary"
            className="btn btn-warning"
            onClick={() => updateChosenProduct(id, history)}
          >
            Change
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

const mapDispatchToProps = {
  deleteChosenProduct,
  updateChosenProduct,
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(ProductItemForAdminPage);
