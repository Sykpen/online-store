import React from "react";
import { connect } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { addNewClient } from "../../../actions";

class SignInForm extends React.Component {
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

    let new_client = {
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
    };

    this.props.addNewClient(new_client);
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
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              name="address"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = { addNewClient };

export default connect(null, mapDispatchToProps)(SignInForm);
