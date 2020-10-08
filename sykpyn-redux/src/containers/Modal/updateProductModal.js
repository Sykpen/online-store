import React from "react";
import { connect } from "react-redux";
import {
  showProductChangeModal,
  closeProductChangeModal,
} from "../../actions/modal";
import { Modal, Button, Form } from "react-bootstrap";
import { updateChosenProduct } from "../../actions/admin";

class ProductChangeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      titleEN: "",
      price: "",
      amount: "",
      image: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    let updateProduct = {
      title: this.state.title,
      titleEN: this.state.titleEN,
      price: this.state.price,
      amount: this.state.amount,
      image: this.state.image,
    };

    this.props.updateChosenProduct(this.props.currentProductId, updateProduct);
  };

  handleInputChange = (e) => {
    console.log(this.props.showProductChangeModal);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <Modal
        show={this.props.showProductChangeModal}
        onHide={() => this.props.closeProductChangeModal()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Enter new title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your deposit"
                name="title"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Enter new titleEN</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your deposit"
                name="titleEN"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Enter new price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your deposit"
                name="price"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Enter new amount</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your deposit"
                name="amount"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Enter new image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your deposit"
                name="image"
                onChange={this.handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              this.handleSubmit();
              this.props.closeProductChangeModal();
            }}
          >
            Oк
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.props.closeProductChangeModal()}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  showProductChangeModal: state.modals.showProductChangeModal,
  currentProductId: state.modals.productId,
});

const mapDispatchToProps = {
  closeProductChangeModal,
  updateChosenProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductChangeModal);
