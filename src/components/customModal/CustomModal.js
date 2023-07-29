import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setModalShow } from '../../system/systemSlice';

const CustomModal = ({ title, children }) => {
  const dispatch = useDispatch();
  const { modalShow } = useSelector((state) => state.systemInfo);

  return (
    <Modal
      show={modalShow}
      onHide={() => dispatch(setModalShow(false))}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        <Modal.Body>{children}</Modal.Body>
      </Modal.Header>
    </Modal>
  );
};

export default CustomModal;
