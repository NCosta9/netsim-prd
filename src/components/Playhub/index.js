import './Playhub.css';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InfoAppsStandard from '../InfoAppsStandard';
import InfoAppsPremium from '../InfoAppsPremium';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';



function Playhub() {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);


    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }


    return (
        <>
            <div id="playhub" className="px-4 py-5 m-0 text-center">
                <div className='row'>
                    <div className='col col-lg-6'>
                        <div className="py-1">
                            <h1 className="display-5 fw-bold text-white">App's Premium</h1>
                            <div className="col-lg-6 mx-auto">
                                <p className="fs-5 mb-4 text-light">
                                    Temos 4 aplicativos <b>Premium</b> disponiveis para nossos clientes.
                                </p>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={10}
                                    loop={true}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        '@0.00': {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                        '@0.75': {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                        '@1.00': {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                        '@1.50': {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                    }}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/ritualfit' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/doutorpass' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/sexyhot' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/hbomax' />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className='col col-lg-6'>
                        <div className="py-1">

                            <h1 className="display-5 fw-bold text-white">App's Standard</h1>
                            <div className="col-lg-6 mx-auto">
                                <p className="fs-5 mb-4 text-light">Temos 16 aplicativos <b>Standard</b> para os nossos clientes escolherem.</p>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={1}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        '@0.00': {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                        '@0.75': {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                        '@1.00': {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                        '@1.50': {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                    }}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/hube' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/fluid' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/deezer' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/supercomics' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/maia' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/ubook' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/looke' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/playkids' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/clubedeciencias' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/fuzeforge' />

                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/galinhapintadinha' />

                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/pocoyo' />

                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/taplingo' />

                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/toaqui' />

                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-icon" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/reforca' />

                                    </SwiperSlide>
                                </Swiper>
                            </div>

                        </div>
                    </div>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-outline-light btn-lg px-4" onClick={(v) => handleShow(v)}>Saiba Mais</button>
                    </div>
                </div>



            </div>


            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>

                <Modal.Header closeButton>
                    <Modal.Title><h3 className='fw-light'>Serviços digitais</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <h3 className='fw-light'>Premium:</h3>
                    <InfoAppsPremium />
                    <h3 className='fw-light'>Standard:</h3>
                    <InfoAppsStandard />

                </Modal.Body>
            </Modal>


        </>
    )
}
export default Playhub;
