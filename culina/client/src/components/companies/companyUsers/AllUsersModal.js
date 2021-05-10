import React from "react";
import { Modal } from "react-bootstrap";
import AllUsersTable from "./AllUsersTable";

const AllUsersModal = ({ handleClose, show, info }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={true}
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title>All Employees</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AllUsersTable info={info} />
      </Modal.Body>
    </Modal>
  );
};

AllUsersModal.propTypes = {};

export default AllUsersModal;
