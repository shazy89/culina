import React from "react";
import { Modal, Button } from "react-bootstrap";
import CompanyUserCard from "./CompanyUserCard";
import PropTypes from "prop-types";

const AllUsersModal = ({ handleClose, show, info }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={true}
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AllUsersModal.propTypes = {};

export default AllUsersModal;
