import React from "react";
import { connect } from "react-redux";
import { closeDepositModal } from "../../../actions/modal";
import { Modal, Button, Form } from "react-bootstrap";
import { updateClientBalance } from "../../../actions/balanceChanges";
import { getCurrentClientData } from "../../../actions";

class DepositModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depositAmount: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    return this.props.getCurrentClientData(this.props.currentLoginClientId);
  }

  handleSubmit = () => {
    let updateDeposit = {
      id: this.props.currentLoginClientId,
      balance: this.state.depositAmount,
    };

    this.props.updateClientBalance(
      this.props.currentLoginClientId,
      updateDeposit,
      this.props.history
    );
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <Modal
        show={this.props.showDepositModal}
        onHide={() => this.props.closeDepositModal()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Enter amoun to deposit</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your deposit"
                name="depositAmount"
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
              this.props.closeDepositModal();
            }}
          >
            Oк
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.props.closeDepositModal()}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  showDepositModal: state.modal.showDepositModal,
  currentLoginClientId: state.authorization.currentLoginClientId,
});

const mapDispatchToProps = {
  closeDepositModal,
  updateClientBalance,
  getCurrentClientData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositModal);
