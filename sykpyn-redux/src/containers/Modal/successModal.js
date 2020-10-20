import React from "react";
import { connect } from "react-redux";
import { closeSuccessModal } from "../../actions/modal";
import { Modal, Button } from "react-bootstrap";

const SuccessModal = ({ showSuccessModal, closeSuccessModal }) => {
  return (
    <Modal show={showSuccessModal} onHide={() => closeSuccessModal()}>
      <Modal.Header closeButton>
        <Modal.Title>Success</Modal.Title>
      </Modal.Header>
      <Modal.Body>Your order successfully uploaded!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeSuccessModal()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  showSuccessModal: state.modals.showSuccessModal,
});

const mapDispatchToProps = { closeSuccessModal };

export default connect(mapStateToProps, mapDispatchToProps)(SuccessModal);
