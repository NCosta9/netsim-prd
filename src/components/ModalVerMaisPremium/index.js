import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InfoAppsPremium from '../InfoAppsPremium';
import vermais from '../../img/icones/mais-1.png'


export default function ModalVerMais() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <i class="bi bi-plus-circle-fill"  onClick={() => handleShow(v)}></i>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title><h3 className='fw-light'>Serviços digitais- Premium</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <InfoAppsPremium/>
        </Modal.Body>
      </Modal>
    </>
  );
}