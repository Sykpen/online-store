import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  deleteChosenProduct,
  updateChosenProduct,
} from "../../../actions/admin";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { compose } from "redux";
import { showProductChangeModal } from "../../../actions/modal";

class ProductItemForAdminPage extends Component {
  render() {
    const { title, id, deleteChosenProduct, history } = this.props;

    return (
      <Fragment>
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
              onClick={() => this.props.showProductChangeModal(id)}
            >
              Change
            </Button>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  deleteChosenProduct,
  updateChosenProduct,
  showProductChangeModal,
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(ProductItemForAdminPage);
