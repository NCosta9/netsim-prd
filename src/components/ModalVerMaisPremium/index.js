import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InfoAppsPremium from '../InfoAppsPremium';

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
         <a key={idx} className='fs-6 text-muted ms-1'  onClick={() => handleShow(v)}>Ver mais</a>
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