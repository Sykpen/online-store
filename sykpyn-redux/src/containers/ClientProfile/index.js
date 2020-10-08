import React, { Component } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Image,
  Col,
  Button,
} from "react-bootstrap";
import "./style.css";
import { connect } from "react-redux";
import { showDepositModal } from "../../actions/modal";
import DepositModal from "./DepositModal";
import { getCurrentClientData } from "../../actions";
import ClientOrdersHistory from "./OrdersHistory";

class ClientProfile extends Component {
  componentDidMount() {
    return this.props.getCurrentClientData(this.props.currentLoginClientId);
  }
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
                <InputGroup.Text id="basic-addon1">First name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder={this.props.clientFirstName}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Last name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder={this.props.clientLastName}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Nickname</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder={this.props.clientNickName}
                aria-label="Nickname"
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
                placeholder={this.props.clientEmail}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">Balance</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder={this.props.clientBalance}
              />
            </InputGroup>

            <label htmlFor="basic-url">Your balance</label>
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
                placeholder={this.props.clientBalance}
              />
              <InputGroup.Append>
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>

            <Button
              variant="success"
              onClick={() => this.props.showDepositModal()}
            >
              Deposit
            </Button>
            <br></br>

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
                placeholder={this.props.clientBonus}
              />
              <InputGroup.Append>
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div className="main_section_wrapper">
            <div className="bonuses">
              <h4>Your bonuses : 0</h4>
              <hr></hr>
              <p>Choose bonus:</p>
              <div>Bonuses will display here</div>
            </div>
            <div className="orders_history">
              <h4>Order history</h4>
              <hr></hr>
              <div>
                <ClientOrdersHistory />
              </div>
            </div>
          </div>
        </div>
        <DepositModal />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  currentLoginClientId: state.authorization.currentLoginClientId,
  clientEmail: state.client.email,
  clientPassword: state.client.password,
  clientAddress: state.client.address,
  clientFirstName: state.client.firstName,
  clientLastName: state.client.lastName,
  clientNickName: state.client.nickName,
  clientBalance: state.client.balance,
  clientBonus: state.client.bonus,
});

const mapDispatchToProps = { showDepositModal, getCurrentClientData };

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile);
