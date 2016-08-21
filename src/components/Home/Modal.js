import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default (props) => {
  return (
    <Modal show={props.isShown} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create new user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Here comes user form...
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};
