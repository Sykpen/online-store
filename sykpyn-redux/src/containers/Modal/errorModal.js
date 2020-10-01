import React from "react";
import { connect } from "react-redux";
import { closeErrorModal } from "../../actions/authorization";
import { Modal, Button } from "react-bootstrap";

const ErrorModal = ({ closeErrorModal, showErrorModal }) => {
  return (
    <Modal show={showErrorModal} onHide={() => closeErrorModal()}>
      <Modal.Header closeButton>
        <Modal.Title>Report</Modal.Title>
      </Modal.Header>
      <Modal.Body>Error: try one more time!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeErrorModal()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  showErrorModal: state.authorization.showErrorModal,
});

const mapDispatchToProps = { closeErrorModal };

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
