import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useNavigate } from 'react-router-dom';

import ImgTelefone from './img-telefone.jpg';
import "./telefone.css"



function Telefonefixo() {
    const navigate = useNavigate();

    return (
        <>
            <div id="telefone" class="row p-4 pb-0 pe-lg-0 pt-lg-5 m-3 align-items-center rounded-3 bg-light">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3 ">
                    <h1 class="display-4 fw-bold lh-1">Telefone Fixo</h1>
                    <p class="lead"> Liberamos a linha telefonica ja configurada, com opção do adquirir um novo número, ou realizar uma portabilidade do numero atual de outra operadora.</p>
                 


                    <div class="row">
                        <div class="col">
                                <div id="collapse-text-1" variant="card card-body">
                                        <div class="card card-body mb-4 rounded-3 shadow-sm">
                                            <h3 className='text-center'>Controle</h3>
                                            <h1 class="card-title pricing-card-title text-center">R$24,90<small class="text-muted fw-light">/mês</small></h1>
                                            <ul class="list-unstyled mt-3 mb-4">
                                                <li>100 MINUTOS para qualquer operadora do Brasil.</li>
                                                <li>Recebimento de ligações ILIMITADAS</li>
                                            </ul>
                                            <button type="button" class="w-100 btn btn-lg" onClick={() => navigate("/cobertura")}>Assinar</button>
                                        </div>


                                </div>
                        </div>

                        <div class="col">
                                <div id="collapse-text-2" variant="card card-body">

                                        <div class="card card-body mb-4 rounded-3 shadow-sm">
                                        <h3 className='text-center'>Sem Controle</h3>
                                            <h1 class="card-title pricing-card-title text-center">R$46,90<small class="text-muted fw-light">/mês</small></h1>
                                            <ul class="list-unstyled mt-3 mb-4">
                                                <li> Ligações ILIMITADAS para qualquer operadora do Brasil.</li>
                                                <li>Recebimento de ligações ILIMITADAS</li>
                                            </ul>
                                            <button type="submit" class="w-100 btn btn-lg btn-primary" onClick={() => navigate("/cobertura")}>Assinar</button>
                                        </div>

                                </div>
                        </div>
                    </div>


                </div>
                <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img class="rounded-lg-3" src={ImgTelefone} alt="" width="720" />
                </div>
            </div>

        </>
    )
}
export default Telefonefixo;
