import React, { Component, Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import "./contacts.css";

class Contacts extends Component {
  render() {
    return (
      <Fragment>
        <div className="container main">
          <div className="contactsFlex">
            <div className="flexItem">
              <p className="h4">CONTACTS</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="formContainer flexItem">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          <div className="mapContainer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.602243461053!2d27.585398405958784!3d53.921043705150474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfa0894d1b6f%3A0x12b54d55f003977f!2z0YPQuy4g0JHQtdC70L7QvNC-0YDRgdC60LDRjyA3LCDQnNC40L3RgdC6IDIyMDA4OQ!5e0!3m2!1sru!2sby!4v1598457112736!5m2!1sru!2sby"
              width="100%"
              height="450"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              title='Our Position'
            ></iframe>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Contacts;
