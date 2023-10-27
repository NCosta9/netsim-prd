import './Playhub.css';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InfoAppsStandard from '../InfoAppsStandard';
import InfoAppsPremium from '../InfoAppsPremium';



function Playhub() {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
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
                                <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/ritualfit' />
                                <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/doutorpass' />
                                <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/sexyhot' />
                                <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/hbomax' />
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
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/hube' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/fluid' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/deezer' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/supercomics' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/maia' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/ubook' />
                                    <img class="img-icon"src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/looke' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/playkids' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/clubedeciencias' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/fuzeforge' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/galinhapintadinha' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/pocoyo' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/taplingo' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/toaqui' />
                                    <img class="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/reforca' />
                                </div>
                            </section>

                        </div>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" class="btn btn-outline-orange btn-lg px-4 me-sm-3 fw-bold">Ver Planos</button>
                                    <button type="button" class="btn btn-outline-light btn-lg px-4" onClick={(v) => handleShow(v)}>Saiba Mais</button>
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
