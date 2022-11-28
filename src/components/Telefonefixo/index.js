import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import ImgTelefone from './img-telefone.jpg';

function Telefonefixo() {
    const [open1, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    return (
        <>
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3 ">
                    <h1 class="display-4 fw-bold lh-1">Telefone Fixo</h1>
                    <p class="lead"> Na contratação de um plano internet com telefone fixo, você tem direito a um plano de telefone CONTROLE. Na hora da instalação liberamos a linha telefonica ja configurada, com opção do cliente adquirir um novo número nosso, ou realizar uma portabilidade do numero atual de outra operadora.<b>Navegue nos botões abaixo para visualizar os nossos planos de telefone.</b></p>
                   <p>
                        <ButtonGroup>
                            <Button onClick={() => setOpen(!open1)} aria-controls="collapse-text-1" aria-expanded={open1} variant="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                                Controle
                            </Button>
                            <Button onClick={() => setOpen2(!open2)} aria-controls="collapse-text-2" aria-expanded={open2} variant="btn btn-outline-secondary btn-lg px-4">
                                Sem Controle
                            </Button>
                        </ButtonGroup>
                    </p>



                    <div class="row">
                        <div class="col">
                            <Collapse in={open1}>
                                <div id="collapse-text-1" variant="card card-body">
                                    <Card variant="mb-4 rounded-3 shadow-sm">
                                        <div class="card-body">
                                            <h1 class="card-title pricing-card-title">R$24,90<small class="text-muted fw-light">/mês</small></h1>
                                            <ul class="list-unstyled mt-3 mb-4">
                                                <li>100 MINUTOS para qualquer operadora do Brasil.</li>
                                                <li>Recebimento de ligações ILIMITADAS</li>
                                            </ul>
                                            <button type="button" class="w-100 btn btn-lg btn-primary">Assinar</button>
                                        </div>
                                    </Card>


                                </div>
                            </Collapse>
                        </div>

                        <div class="col">
                            <Collapse in={open2}>
                                <div id="collapse-text-2" variant="card card-body">
                                    <Card variant="mb-4 rounded-3 shadow-sm">

                                        <div class="card-body">
                                            <h1 class="card-title pricing-card-title">R$46,90<small class="text-muted fw-light">/mês</small></h1>
                                            <ul class="list-unstyled mt-3 mb-4">
                                                <li> Ligações ILIMITADAS para qualquer operadora do Brasil.</li>
                                                <li>Recebimento de ligações ILIMITADAS</li>
                                            </ul>
                                            <button type="button" class="w-100 btn btn-lg btn-primary">Assinar</button>
                                        </div>
                                    </Card>

                                </div>
                            </Collapse>
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
