import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default ({ children, isShown, onClose }) => {
  return (
    <Modal show={isShown} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create new user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};
