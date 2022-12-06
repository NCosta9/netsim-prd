import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Lecupon from './Img/Lecupon-1.png';
import Perguntasfrequentes from '../../components/Perguntasfrequentes';

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Home() {

  const navigate = useNavigate();



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
    <div className='display-flex'>
      <Header />
    </div>
      <br/>
      {/*Onde inicia o Banner rotativo */}
      <div className="">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://netsimtelecom.com.br/wp-content/uploads/2022/05/home-banner-02-1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption text-end d-none d-md-block">
                <p className="titulo-home">Bem- Vindo a</p>
                <img className="alignright" src="https://netsimtelecom.com.br/wp-content/uploads/2021/11/logo-branca.png" width="400" />
                <p className="subtitulo-home">Planos de ultravelocidade
                  com soluções em tecnologia e internet para garantir a melhor conexão para você.</p>


              </div>
            </div>
            <div className="carousel-item">
              <img src="https://netsimtelecom.com.br/wp-content/uploads/2022/05/BANNER_PLANOS_FIBRA-OTICA.png" className="d-block w-100" alt="..." />
              {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>*/}
            </div>
            <div className="carousel-item">
              <img src="https://netsimtelecom.com.br/wp-content/uploads/2022/09/Banner-migracao-radio-par-fibra.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Agora ficou simples de solicitar sua migração de internet via radio para fibra otica, basta preencher um formulario com os dados necessarios e entraremos em contato para realizar sua instalação</h5>
                <p><button type="button" className="btn-netsim">CLIQUE AQUI</button></p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>{/*fim Banner rotativo */}

      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 divider-orange">Escolha o que deseja...</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-router m-2" viewBox="0 0 16 16">
                <path d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707Z" />
                <path d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707ZM2.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm4.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z" />
                <path d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86L2.974 2.342ZM14.5 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h13Z" />
                <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
              </svg>
            </div>
            <h3 className="fs-2">Planos de Internet</h3>
            <p>Planos apartir de R$ 99,90 + ultima tecnologia wi-fi do mercado </p>
            <a onClick={() => navigate("/cobertura")} className="icon-link d-inline-flex align-items-center link-orange">
              Saiba Mais
              <svg className="bi" width="1em" height="1em"><use href="#chevron-right" /></svg>
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-telephone m-2" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>        </div>
            <h3 className="fs-2">Planos de Telefonia</h3>
            <p>Do plano basico ao ilimitado oferecemos o melhor em telefonia da região.</p>
            <a onClick={() => navigate("/cobertura")} className="icon-link d-inline-flex align-items-center link-orange">
              Saiba Mais
              <svg className="bi" width="1em" height="1em"><use href="#chevron-right" /></svg>
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-building m-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
              </svg>        </div>
            <h3 className="fs-2">Planos Empresariais</h3>
            <p>Planos Exclusivos para contrato em CNPJ, todos com SLA de até 24 horas.</p>
            <a  className="icon-link d-inline-flex align-items-center link-orange" onClick={() => navigate("/cobertura")}>
              Saiba Mais
              <svg className="bi" width="1em" height="1em"><use href="#chevron-right" /></svg>
            </a>
          </div>
        </div>
      </div>


      <div className="container">
        <div className=" card align-items-center text-center inline p-3 border-orange">
          <img className="mt-5" src="https://netsimtelecom.com.br/wp-content/uploads/2022/05/logotipo-removebg-preview-e1654348971421.png" width="200" height="50" />
          <div className="row featurette">
            <div className="col-md-7 mt-5">
              <h2 className="featurette-heading fw-normal lh-1">Aplicativos de entretenimento <span className="text-muted">Para toda a familia.</span></h2>
              <p className="lead">Escolha um plano e tenha acesso aos nossos aplicativos standard e premium e garanta diversão para toda a familia.</p>
              <button className="btn btn-netsim" onClick={() => navigate("/cobertura")}>Saiba mais</button>
            </div>
            <div className="col-md-5">
              <div id="myCarousel" className="carousel slide m-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <div className="container">
                      <img src="https://netsimtelecom.com.br/wp-content/uploads/2021/12/1-300x300.png"></img>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <div className="container">
                      <img src="https://netsimtelecom.com.br/wp-content/uploads/2021/12/4-300x300.png" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <img src="https://netsimtelecom.com.br/wp-content/uploads/2021/12/7-300x300.png" />
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="container shadow-lg pb-5">
        <h1 className="display-4 fw-bold text-center mt-5"> Nossos valores</h1>
        <h5 className="text-dark">CONFIABILIDADE</h5>
        <div className="progress">
          <div id="progress-bar-100" className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        </div>
        <h5 className="text-dark">PRODUTIVIDADE</h5>
        <div className="progress">
          <div id="progress-bar-100" className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        </div>
        <h5 className="text-dark">EXCLUSIVIDADE</h5>
        <div className="progress">
          <div id="progress-bar-100" className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        </div>
        <h5 className="text-dark">VELOCIDADE</h5>
        <div className="progress">
          <div id="progress-bar-100" className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        </div>

      </div>

      <div className="container">
        <div className="">
          <div className="px-4 pt-5 my-5 text-center divider-orange">
            <h1 className="display-4 fw-bold">Clube de descontos</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">A Netsim tem parceria com mais de 3 mil marcas e 25 mil estabelecimentos. E nossos clientes ganham acesso ao nosso clube de descontos com mais de 3 mil marcas com descontos exclusivos todos os dias.</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" onClick={() => navigate("/cobertura")}>Contratar internet</button>
                {values.map((v, idx) => (
                  <button type="button" key={idx} className="btn btn-outline-orange btn-lg px-4" onClick={() => handleShow(v)}>Saiba Mais</button>
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="container px-5">
                <img src={Lecupon} className="img-fluid mb-1" width="300" height="100" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <h1 className="display-4 fw-bold text-center p-3">Dúvidas frequentes</h1>
        <div className="card">
          <Perguntasfrequentes />
        </div>
      </div>

      <div className="container mt-5">
        <div className="card-laranja">
          <div className="row">
            <div className="col mx-5">
              <h5 className="text-light text-custom"> Conheça agora os nossos planos de internet!</h5>
            </div>
            <div className="col p-5 text-end">
              <button className="btn btn-light mt-4 btn-lg" onClick={() => navigate("/cobertura")}> Confira</button>
            </div>
          </div>
        </div>
      </div>


      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <img className="figura-cell" src="https://netsimtelecom.com.br/wp-content/uploads/2021/11/download1-1.png" height="300" width="auto" />
          </div>
          <div className="col align-middle">
            <div className="container-fluid py-5">
              <h6 className="display-5 fw-bold me-5 mb-5">Autoatendimento para clientes</h6>
              <div className="row">
                <div id="bg-laranja" className="col card me-2 align-items-center text-light">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-terminal-plus mt-3" viewBox="0 0 16 16">
                    <path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z" />
                    <path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                  </svg>
                  <div className="card-body">
                    <h5 className="card-title">
                      2 Via de fatura
                    </h5>
                    <div className="card-text">

                    </div>
                  </div>
                </div>
                <div id="bg-laranja" className="col card align-items-center text-light">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="mt-3" >
                    <path d="M393.072 391.897c-20.082 0-38.969-7.81-53.176-22.02l-77.069-77.067c-5.375-5.375-14.773-5.395-20.17 0l-76.784 76.786c-14.209 14.207-33.095 22.019-53.179 22.019h-9.247l97.521 97.52c30.375 30.375 79.614 30.375 109.988 0l97.239-97.238h-15.123zm-105.049 74.327c-8.55 8.53-19.93 13.25-32.05 13.25h-.02c-12.12 0-23.522-4.721-32.05-13.25l-56.855-56.855c7.875-4.613 15.165-10.248 21.758-16.84l63.948-63.948 64.23 64.23c7.637 7.66 16.188 14.013 25.478 18.952l-54.439 54.46zM310.958 22.78c-30.374-30.374-79.613-30.374-109.988 0l-97.52 97.52h9.247c20.082 0 38.97 7.834 53.178 22.02l76.784 76.785c5.57 5.592 14.622 5.57 20.17 0l77.069-77.068c14.207-14.187 33.094-22.02 53.176-22.02h15.123l-97.239-97.237zm6.028 96.346l-64.23 64.23-63.97-63.97c-6.593-6.592-13.86-12.206-21.736-16.818l56.853-56.877c17.69-17.645 46.476-17.668 64.121 0l54.44 54.461c-9.292 4.961-17.842 11.315-25.479 18.974h.001z" />
                    <path d="M489.149 200.97l-58.379-58.377h-37.706c-13.838 0-27.394 5.635-37.185 15.426l-77.068 77.069c-7.202 7.18-16.623 10.77-26.067 10.77-9.443 0-18.885-3.59-26.066-10.77l-76.785-76.785c-9.792-9.814-23.346-15.427-37.207-15.427h-31.81L22.78 200.97c-30.374 30.375-30.374 79.614 0 109.988l58.095 58.074 31.81.021c13.86 0 27.416-5.635 37.208-15.426l76.784-76.764c13.925-13.947 38.208-13.924 52.133-.02l77.068 77.066c9.791 9.792 23.346 15.405 37.185 15.405h37.706l58.379-58.356c30.374-30.374 30.374-79.613 0-109.988zm-362.19 129.724c-3.763 3.786-8.942 5.917-14.273 5.917H94.302l-48.59-48.564c-17.689-17.69-17.689-46.476 0-64.143L94.3 175.296h18.385c5.331 0 10.51 2.154 14.295 5.918l74.74 74.74-74.761 74.74zm339.257-42.647l-48.848 48.87h-24.305c-5.309 0-10.508-2.155-14.251-5.92l-75.023-75.043 75.023-75.023c3.743-3.764 8.942-5.918 14.252-5.918h24.304l48.847 48.891c8.573 8.551 13.273 19.93 13.273 32.05 0 12.141-4.7 23.52-13.273 32.093z" />
                  </svg>            <div className="card-body">
                    <h5 className="card-title">Pagamento com PIX              </h5>
                    <div className="card-text">

                    </div>
                  </div>
                </div>
                <div id="bg-laranja" className="col card ms-2 align-items-center text-light">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-wrench-adjustable mt-3" viewBox="0 0 16 16">
                    <path d="M16 4.5a4.492 4.492 0 0 1-1.703 3.526L13 5l2.959-1.11c.027.2.041.403.041.61Z" />
                    <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.49 4.49 0 0 0 11.5 9Zm-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376ZM3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>            <div className="card-body">
                    <h5 className="card-title">
                      Abrir suporte
                    </h5>
                    <div className="card-text">
                    </div>
                  </div>
                </div>
                <div id="bg-laranja" className="col card ms-2 align-items-center text-light">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-speedometer2 mt-3" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                    <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                  </svg>            <div className="card-body">
                    <h5 className="card-title">
                      Teste de velocidade
                    </h5>
                    <div className="card-text">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>

        <Modal.Header closeButton className='me-3'>
          <Modal.Title><h3 className='fw-light'>Clube de descontos Netsim- Como Usar</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1> Conteudo clube de descontos</h1>

        </Modal.Body>
      </Modal>
    </>

  )

}

export default Home;