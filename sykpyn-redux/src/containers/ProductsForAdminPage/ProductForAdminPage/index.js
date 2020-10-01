import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteChosenProduct, updateChosenProduct } from "../../../actions/admin";
import { Card, Button } from "react-bootstrap";

class ProductItemForAdminPage extends Component {
  render() {
    const { title, id, deleteChosenProduct, updateChosenProduct } = this.props;

    return (
      <Card style={{ width: "18rem", marginTop: "10px" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text> Product id - {id}</Card.Text>
          <Button
            variant="primary"
            className="btn btn-danger"
            onClick={() => deleteChosenProduct(id)}
          >
            Delete
          </Button>
          <Button
            variant="primary"
            className="btn btn-warning"
            onClick={() => updateChosenProduct(id)}
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

export default connect(null, mapDispatchToProps)(ProductItemForAdminPage);
