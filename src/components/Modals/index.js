import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


export default function Modals(props){


    const [ModalFullscreen, setModalFullscreen] = useState(true);
    const [ModalShow, setModalShow] = useState(false);


    function handleModalShow(breakpoint) {
        setModalFullscreen(breakpoint);
        setModalShow(true);
    }

    return(
        <>
          <a href="#" className={props.buttonClass} onClick={() => setModalShow(true, handleModalShow)}>{props.buttonName}</a>


        <Modal
                show={ModalShow}
                fullscreen={ModalFullscreen}
                onHide={() => setModalShow(false)
                }
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm"><h3 className='fw-light'>{props.title}</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                 {props.conteudo}

                </Modal.Body>
            </Modal>
        </>
    )
}