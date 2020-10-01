import React from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import {
  checkIfClientExist,
  closeErrorModal,
} from "../../../actions/authorization";
import ErrorModal from '../../Modal/errorModal'

class ClientLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      address: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let client_params = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.checkIfClientExist(client_params, this.props.history);
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              placeholder="Enter email"
              name="email"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Login
          </Button>
        </Form>
        <ErrorModal />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  showErrorModal: state.authorization.showErrorModal,
});

const mapDispatchToProps = { checkIfClientExist, closeErrorModal };

export default connect(mapStateToProps, mapDispatchToProps)(ClientLoginForm);
