import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InfoAppsStandard from '../InfoAppsStandard';

import vermais from '../../img/icones/mais-1.png'

export default function ModalVerMaisStandard() {
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
      <img className="ms-1" height="20" width="20" src={vermais} onClick={() => handleShow(v)}/>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title><h3 className='fw-light'>Serviços digitais- Standard</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <InfoAppsStandard/>
        </Modal.Body>
      </Modal>
    </>
  );
}