import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { adminLogin } from "../../../actions/authorization";

class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: "",
      firstName: "",
      lastName: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let admin = {
      nick_name: this.state.nickName,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      password: this.state.password,
    };

    console.log(this.props.history);
    this.props.adminLogin(admin, this.props.history);
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
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              placeholder="Nickname"
              name="nickName"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="First Name"
              name="firstName"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Last Name"
              name="lastName"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="password"
              name="password"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = { adminLogin };

export default connect(null, mapDispatchToProps)(AdminForm);
