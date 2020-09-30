import React, { Fragment } from "react";
import { closeModal } from "../../actions/authorization";
import { addNewProduct, fetchProducts } from "../../actions";
import { connect } from "react-redux";
import ProductsForAdminPage from "../ProductsForAdminPage";
import "./style.css";
import { Modal, Button } from "react-bootstrap";

class AdminDashboard extends React.Component {
  componentDidMount() {
    return this.props.fetchProducts();
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      titleEN: "",
      price: "",
      amount: "",
      imgUrl: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let new_product = {
      title: this.state.title,
      titleEN: this.state.titleEN,
      price: this.state.price,
      amount: this.state.amount,
      img_url: this.state.imgUrl,
    };

    this.props.addNewProduct(new_product);
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="flex_for_products">
          <ProductsForAdminPage />
        </div>
        <div>
          <h1>New Product</h1>
          <form>
            <p>
              <label for="title">Title</label>
              <input
                id="title"
                type="text"
                name="title"
                onChange={this.handleInputChange}
              />
            </p>
            <p>
              <label for="titleEn">Title EN</label>
              <input
                id="titleEn"
                type="text"
                name="titleEN"
                onChange={this.handleInputChange}
              />
            </p>
            <p>
              <label for="price">Price</label>
              <input
                id="price"
                type="text"
                name="price"
                onChange={this.handleInputChange}
              />
            </p>
            <p>
              <label for="amount">Amount</label>
              <input
                id="amount"
                type="text"
                name="amount"
                onChange={this.handleInputChange}
              />
            </p>
            <p>
              <label for="imgUrl">Img Url</label>
              <input
                id="imgUrl"
                type="text"
                name="imgUrl"
                onChange={this.handleInputChange}
              />
            </p>
            <p>
              <input type="submit" onClick={this.handleSubmit} />
            </p>
          </form>
        </div>
        <Modal
          show={this.props.showModal}
          onHide={() => this.props.closeModal()}
        >
          <Modal.Header closeButton>
            <Modal.Title>Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>Well done, you made it!!!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.props.closeModal()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  showModal: state.productItems.showModal,
});

const mapDispatchToProps = {
  addNewProduct,
  fetchProducts,
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
