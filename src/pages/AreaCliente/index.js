import React, { useState } from 'react';
import CarouselNoticias from '../../components/CarouselNoticias';
import Iconlogo from '../../img/icon-logo.png';
import { Link } from 'react-router-dom';

import iconPortalApp from "../../img/portaldeapp-icon.png"
import iconDesconto from "../../img/clubededecontos-icon.png"
import BannerAreaCliente from "../../img/Banner-AreaDoCliente.png"

import Modal from 'react-bootstrap/Modal';
import InfoAppsStandard from '../../components/InfoAppsStandard';
import InfoAppsPremium from '../../components/InfoAppsPremium';


export default function AreaCliente() {

    const BannerStyle = {
        color: 'blue',
        backgroundImage: 'url(' + BannerAreaCliente + ')',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
    };


    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);


    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            <div className="vsc-initialized">

                <div className="container">
                    <header className="blog-header lh-1 py-3">
                        <div className="row flex-nowrap justify-content-between align-items-center">
                            <div className="col-4 pt-1">

                                <Link to="/"> <img src={Iconlogo} height="32" width="32" alt='logo' /></Link>


                            </div>
                            <div className="col-4 text-center">
                                {/* <a className="blog-header-logo text-dark" href="/">Area do cliente</a> */}
                            </div>
                            <div className="col-4 d-flex justify-content-end align-items-center">

                                <a className="btn btn-sm btn-outline-primary" href="tel:6120993434">Ligar para Netsim</a>
                            </div>
                        </div>
                    </header>
                </div>



                <main className="container">
                    <div className="p-4 p-md-5 mb-4 rounded text-bg-dark" style={BannerStyle}>
                        <div className="col-md-6 px-0">
                            <h1 className="display-4 fst-italic">Bem- vindo a nossa area do cliente </h1>
                            <p className="lead my-3">
                                Através desse canal em nosso site, os nossos clientes encontrara todas as novidade relacionadas aos nossos serviços. Alem disso, todas
                                as operações de facilidade para o cliente conseguira ser realizado por aqui.
                            </p>
                            <p className="lead mb-0"><a href="/" className="text-white fw-bold">Voltar para Home</a></p>
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-primary">Veja</strong>
                                    <h3 className="mb-0">Clube de Descontos</h3>
                                    <p className="card-text mb-auto">Aplicativo que garante a você descontos em estabelecimentos em sua região.</p>
                                    <a href="/" className="btn btn-primary my-1">Acessar</a>
                                    <a href="#" className="btn btn-outline-primary my-1">Como Configurar</a>

                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <img src={iconDesconto} className="bd-placeholder-img" width="200" height="250" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-primary">Veja</strong>
                                    <h3 className="mb-0">Portal de Aplicativos</h3>
                                    <p className="mb-auto">Acesse agora esse portal para escolher quais aplicativos deseja utilizar</p>
                                    <a href="https://www.portaldoassinante.com/netsim" className="btn btn-primary my-1">Acessar</a>

                                    <button className="btn btn-outline-primary my-1" onClick={(v) => handleShow(v)}>Como Configurar</button>

                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <img src={iconPortalApp} className="bd-placeholder-img" width="200" height="250" />


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">
                        <div className="col-md-8">
                            <h3 className="pb-4 mb-4 fst-italic divider-orange">
                                Notícias
                            </h3>

                            <div className="blog-post">
                                <CarouselNoticias />

                                <span className='divider-orange' />
                                <br />


                                <h2>Escolhar o que deseja fazer...</h2>



                                <div className="row mb-2">
                                    <div className="col-md-6">
                                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                            <div className="col p-4 d-flex flex-column position-static">
                                                {/* <strong className="d-inline-block mb-2 text-primary">Veja</strong> */}
                                                <h3 className="mb-3">2 via de Fatura</h3>
                                                {/* <p className="card-text mb-auto">Aplicativo que garante a você descontos em estabelecimentos em sua região.</p> */}
                                                <a href="https://ixc.netsimtelecom.com.br/central_assinante_web/login" className="btn btn-outline-primary">Acessar</a>
                                            </div>
                                            <div className="col-auto  d-lg-block p-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-terminal-plus mt-3" viewBox="0 0 16 16">
                                                    <path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z" />
                                                    <path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                            <div className="col p-4 d-flex flex-column position-static">
                                                {/* <strong className="d-inline-block mb-2 text-primary">Veja</strong> */}
                                                <h3 className="mb-3">Pagar com PIX</h3>
                                                {/* <p className="card-text mb-auto">Aplicativo que garante a você descontos em estabelecimentos em sua região.</p> */}
                                                <a href="https://ixc.netsimtelecom.com.br/central_assinante_web/login" className="btn btn-outline-primary">Acessar</a>
                                            </div>
                                            <div className="col-auto d-lg-block p-3">
                                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="mt-3" >
                                                    <path d="M393.072 391.897c-20.082 0-38.969-7.81-53.176-22.02l-77.069-77.067c-5.375-5.375-14.773-5.395-20.17 0l-76.784 76.786c-14.209 14.207-33.095 22.019-53.179 22.019h-9.247l97.521 97.52c30.375 30.375 79.614 30.375 109.988 0l97.239-97.238h-15.123zm-105.049 74.327c-8.55 8.53-19.93 13.25-32.05 13.25h-.02c-12.12 0-23.522-4.721-32.05-13.25l-56.855-56.855c7.875-4.613 15.165-10.248 21.758-16.84l63.948-63.948 64.23 64.23c7.637 7.66 16.188 14.013 25.478 18.952l-54.439 54.46zM310.958 22.78c-30.374-30.374-79.613-30.374-109.988 0l-97.52 97.52h9.247c20.082 0 38.97 7.834 53.178 22.02l76.784 76.785c5.57 5.592 14.622 5.57 20.17 0l77.069-77.068c14.207-14.187 33.094-22.02 53.176-22.02h15.123l-97.239-97.237zm6.028 96.346l-64.23 64.23-63.97-63.97c-6.593-6.592-13.86-12.206-21.736-16.818l56.853-56.877c17.69-17.645 46.476-17.668 64.121 0l54.44 54.461c-9.292 4.961-17.842 11.315-25.479 18.974h.001z" />
                                                    <path d="M489.149 200.97l-58.379-58.377h-37.706c-13.838 0-27.394 5.635-37.185 15.426l-77.068 77.069c-7.202 7.18-16.623 10.77-26.067 10.77-9.443 0-18.885-3.59-26.066-10.77l-76.785-76.785c-9.792-9.814-23.346-15.427-37.207-15.427h-31.81L22.78 200.97c-30.374 30.375-30.374 79.614 0 109.988l58.095 58.074 31.81.021c13.86 0 27.416-5.635 37.208-15.426l76.784-76.764c13.925-13.947 38.208-13.924 52.133-.02l77.068 77.066c9.791 9.792 23.346 15.405 37.185 15.405h37.706l58.379-58.356c30.374-30.374 30.374-79.613 0-109.988zm-362.19 129.724c-3.763 3.786-8.942 5.917-14.273 5.917H94.302l-48.59-48.564c-17.689-17.69-17.689-46.476 0-64.143L94.3 175.296h18.385c5.331 0 10.51 2.154 14.295 5.918l74.74 74.74-74.761 74.74zm339.257-42.647l-48.848 48.87h-24.305c-5.309 0-10.508-2.155-14.251-5.92l-75.023-75.043 75.023-75.023c3.743-3.764 8.942-5.918 14.252-5.918h24.304l48.847 48.891c8.573 8.551 13.273 19.93 13.273 32.05 0 12.141-4.7 23.52-13.273 32.093z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                            <div className="col p-4 d-flex flex-column position-static">
                                                {/* <strong className="d-inline-block mb-2 text-primary">Veja</strong> */}
                                                <h3 className="mb-3">Chamar suporte</h3>
                                                {/* <p className="card-text mb-auto">Aplicativo que garante a você descontos em estabelecimentos em sua região.</p> */}
                                                <a href="https://ixc.netsimtelecom.com.br/central_assinante_web/login" className="btn btn-outline-primary">Acessar</a>
                                            </div>
                                            <div className="col-auto d-lg-block p-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-wrench-adjustable mt-3" viewBox="0 0 16 16">
                                                    <path d="M16 4.5a4.492 4.492 0 0 1-1.703 3.526L13 5l2.959-1.11c.027.2.041.403.041.61Z" />
                                                    <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.49 4.49 0 0 0 11.5 9Zm-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376ZM3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                            <div className="col p-4 d-flex flex-column position-static">
                                                {/* <strong className="d-inline-block mb-2 text-primary">Veja</strong> */}
                                                <h3 className="mb-3">Testar Velocidade</h3>
                                                {/* <p className="card-text mb-auto">Aplicativo que garante a você descontos em estabelecimentos em sua região.</p> */}
                                                <a href="https://ixc.netsimtelecom.com.br/central_assinante_web/login" className="btn btn-outline-primary">Acessar</a>
                                            </div>
                                            <div className="col-auto d-lg-block p-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-speedometer2 mt-3" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                                    <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                            <nav className="blog-pagination my-5" aria-label="Pagination">
                                <a className="btn btn-outline-primary rounded-pill " href="/"> Voltar para pagina principal </a>
                                <a className="btn btn-outline-secondary rounded-pill disabled" href='/cliente'>Voltar ao ínicio</a>
                            </nav>

                        </div>

                        <div className="col-md-4">
                            <div className="position-sticky">
                                <div className="p-4 mb-3 bg-light rounded">
                                    <h4 className="fst-italic">Planos de Internet</h4>
                                    <p className="mb-0">Venha conferir os novos planos de internet</p>
                                    <a className='btn btn-outline-success rounded-pill my-2' href='/cobertura'>Visualizar</a>
                                </div>

                                <div className="p-4">
                                    <h4 className="fst-italic">Serviços:</h4>
                                    <ol className="list-group ">
                                        <li className='list-group-item'><a href="/">Mudança de endereço dos equipamentos</a></li>
                                        <li className='list-group-item'><a href="/">Mudança de titularidade</a></li>
                                        <li className='list-group-item'><a href="/">Mudança de ponto internet</a></li>
                                        <li className='list-group-item'><a href="/">Solicitar Migração</a></li>
                                        <li className='list-group-item'><a href="/">Teste de velocidade</a></li>

                                    </ol>
                                </div>

                                <div className="p-4">
                                    <h4 className="fst-italic">Nossas Redes:</h4>
                                    <ol className="list-unstyled">
                                        <li><a href="/">Instagram</a></li>
                                        <li><a href="/">Facebook</a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
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
    );
}