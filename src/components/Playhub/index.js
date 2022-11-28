import './Playhub.css';
import premium1 from './img/premium1.png';
import premium2 from './img/premium2.png';
import premium3 from './img/premium3.png';
import premium4 from './img/premium4.png';
import standard1 from './img/standard1.png';
import standard2 from './img/standard2.png';
import standard3 from './img/standard3.jpg';
import standard4 from './img/standard4.png';
import standard5 from './img/standard5.png';
import standard6 from './img/standard6.jpg';
import standard7 from './img/standard7.png';
import standard8 from './img/standard8.png';
import standard9 from './img/standard9.png';
import standard10 from './img/standard10.png';
import standard11 from './img/standard11.png';
import standard12 from './img/standard12.png';
import standard13 from './img/standard13.png';
import standard14 from './img/standard14.png';
import standard15 from './img/standard15.png';
import standard16 from './img/standard16.png';

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InfoAppsStandard from '../InfoAppsStandard';
import InfoAppsPremium from '../InfoAppsPremium';



function Playhub() {

    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [fullscreenPremium, setFullscreenPremium] = useState(true);
    const [show, setShow] = useState(false);
    const [showPremium, setShowPremium] = useState(false);

  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
     function handleShowPremium(breakpoint) {
        setFullscreenPremium(breakpoint);
        setShowPremium(true);
      }
  

    return (
        <>
            <div class="bg-dark text-secondary px-4 py-5 m-0 text-center">
                <div class="py-5">
                    <h1 class="display-5 fw-bold text-white">App's Premium</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="fs-5 mb-4">
                            Temos 4 aplicativos <b>Premium</b> disponiveis para nossos clientes.
                        </p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <section class="galeria">
                                <img class="img-icon" src={premium1} />
                                <img class="img-icon" src={premium2} />
                                <img class="img-icon" src={premium3} />
                                <img class="img-icon" src={premium4} />
                            </section>
                        </div>
                        
                    </div>
                </div>
                <span className='divider-orange'/>
                <div class="py-5">
                    
                    <h1 class="display-5 fw-bold text-white">App's Standard</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="fs-5 mb-4">Temos 16 aplicativos <b>Standard</b> para os nossos clientes escolherem.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <section class="galeria">
                                <div class="photos">
                                    <img class="img-icon" src={standard1} />
                                    <img class="img-icon" src={standard2} />
                                    <img class="img-icon" src={standard3} />
                                    <img class="img-icon" src={standard4} />
                                    <img class="img-icon" src={standard5} />
                                    <img class="img-icon" src={standard6} />
                                    <img class="img-icon" src={standard7} />
                                    <img class="img-icon" src={standard8} />
                                    <img class="img-icon" src={standard9} />
                                    <img class="img-icon" src={standard10} />
                                    <img class="img-icon" src={standard11} />
                                    <img class="img-icon" src={standard12} />
                                    <img class="img-icon" src={standard13} />
                                    <img class="img-icon" src={standard14} />
                                    <img class="img-icon" src={standard15} />
                                    <img class="img-icon" src={standard16} />
                                </div>
                            </section>

                        </div>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" class="btn btn-outline-orange btn-lg px-4 me-sm-3 fw-bold">Ver Planos</button>
                                {values.map((v, idx) => (
                                    <button type="button" key={idx} class="btn btn-outline-light btn-lg px-4" onClick={() => handleShow(v)}>Saiba Mais</button>
                                 ))}
                        </div>
                    </div>
                </div>
            </div>

            
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>

        <Modal.Header closeButton>
          <Modal.Title><h3 className='fw-light'>Serviços digitais</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <h3 className='fw-light'>Premium:</h3>
            <InfoAppsPremium/>
            <h3 className='fw-light'>Standard:</h3>
            <InfoAppsStandard/>

        </Modal.Body>
      </Modal>

     
        </>
    )
}
export default Playhub;
