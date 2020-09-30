import React, { Component } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Image,
  Col,
} from "react-bootstrap";
import "./style.css";

class ClientCabinet extends Component {
  render() {
    return (
      <Container>
        <div className="profile_page_wrapper">
          <div className="profile_info_wrapper">
            <div>
              <Col xs={6} md={4}>
                <Image
                  src="https://img.favpng.com/10/19/1/silhouette-icon-png-favpng-peFPUDNWBU7CzhbGQ8QymdcX2.jpg"
                  roundedCircle
                  className="profile_image"
                  alt="Avatar"
                />
              </Col>
            </div>
            <label htmlFor="basic-url">Bacik Info</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Cергей"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Nickname</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Sykpyn"
                aria-label="Recipient's username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">Email</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="example@yandex.ru"
              />
            </InputGroup>

            <label htmlFor="basic-url">Your bonuses</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <img
                    className="bonus_icon"
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/bonus-1612903-1368428.png"
                    alt="bonus_icon"
                  ></img>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Amount (to the nearest dollar)"
                placeholder={0}
              />
              <InputGroup.Append>
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div className="main_section_wrapper">
            <div className="bonuses">
              <h4>Мои бонусы : 0</h4>
              <hr></hr>
              <p>Выберите бонусы</p>
              <div>Тут будут бонусы</div>
            </div>
            <div className="orders_history">
              <h4>История заказов</h4>
              <hr></hr>
              <div>Тут будут заказы из БД</div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default ClientCabinet;
