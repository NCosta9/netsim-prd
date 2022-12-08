import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './Planosempresariais.css';
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import {useNavigate} from 'react-router-dom'

function Planosfibra() {
    const [silver, setOpenSilver] = useState(false);
    const [gold, setOpenGold] = useState(false);

    const navigate= useNavigate();

    return (
        <>


            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center align-items-center">
                <div class="col-md-5">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div className='card-planos'>

                            <div class="card-header py-3" style={{ background: '#DCDCDC' }}>
                                <h4 class="my-0 fw-normal">Gold</h4>
                            </div>
                            <div class="card-body ">
                                <small class="text-muted fw-light"><p className='text-start mb-0'>Download</p></small>
                                <h3 class="my-0 mb-3 fw-normal offer_title text-start">500 MEGA</h3>
                                <small class="text-muted fw-light"><p className='text-start mb-0'>Upload</p></small>
                                <h3 class="my-0 mb-3 fw-normal offer_title text-start">250 MEGA</h3>
                                <small class="text-muted fw-light"><p className='text-start mb-0'>Apenas</p></small>
                                <h2 class="card-title pricing-card-title fw-light text-start">R$450,00<small class="text-muted fw-light">/mês</small></h2>

                                  <button type="button" class="w-100 btn btn-lg btn-primary mt-3" onClick={() => navigate('/contrate-empresa')}>Assinar</button>
                            </div>
                            <div class="card-footer" style={{ background: '#DCDCDC' }}>
                                <div id="ultra-collapse-text">
                                    <small class="text-muted fw-light"><p className='text-start mb-0'>Benefícios do plano:</p></small>
                                    <ul class="list-unstyled mt-3 mb-4 text-start">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" className='mx-2 text-muted'><path d="M4.375 17.083q-.667 0-1.135-.458-.469-.458-.469-1.125v-2.646q0-.666.469-1.125.468-.458 1.135-.458h7.937V8.792q0-.271.209-.469.208-.198.458-.198.271 0 .469.198.198.198.198.469v2.479h1.708q.667 0 1.125.458.459.459.459 1.125V15.5q0 .667-.459 1.125-.458.458-1.125.458Zm10.979-1.333q.125 0 .188-.073.062-.073.062-.177v-2.646q0-.104-.062-.177-.063-.073-.188-.073H4.375q-.125 0-.198.073-.073.073-.073.177V15.5q0 .104.073.177t.198.073Zm-8.896-1.562q0-.313-.208-.521-.208-.209-.542-.209-.312 0-.52.209-.209.208-.209.521 0 .312.209.52.208.209.52.209.334 0 .542-.209.208-.208.208-.52Zm2.834 0q0-.313-.209-.521-.208-.209-.541-.209-.313 0-.521.209-.209.208-.209.521 0 .312.209.52.208.209.521.209.333 0 .541-.209.209-.208.209-.52Zm2.083.729q.333 0 .542-.209.208-.208.208-.52 0-.313-.208-.521-.209-.209-.542-.209-.313 0-.521.209-.208.208-.208.521 0 .312.208.52.208.209.521.209Zm-.521-8.271q-.208-.208-.198-.479.011-.271.24-.417.458-.333.979-.5.521-.167 1.104-.167.604 0 1.104.167.5.167.979.5.23.146.25.406.021.261-.208.49-.166.187-.427.208-.26.021-.573-.125-.25-.125-.521-.219-.271-.093-.583-.093-.333 0-.615.093-.281.094-.531.219-.312.146-.573.125-.26-.021-.427-.208ZM8.667 4.5q-.209-.208-.188-.458.021-.25.229-.438.875-.708 1.959-1.114 1.083-.407 2.312-.407 1.229 0 2.313.407 1.083.406 1.979 1.114.208.188.219.448.01.26-.219.469-.167.167-.438.187-.271.021-.5-.166-.666-.542-1.5-.834-.833-.291-1.854-.291-1 0-1.833.291-.834.292-1.5.834-.229.187-.511.156-.281-.031-.468-.198ZM4.104 15.75v-3.146 3.146Z" /></svg>
                                            WI-FI 6 1500 Mbps
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" className='mx-2 text-muted'><path d="M4.125 17.5q-.542 0-.927-.385-.386-.386-.386-.927 0-.521.386-.907.385-.385.927-.385t.927.385q.386.386.386.907 0 .541-.386.927-.385.385-.927.385Zm11.208 0q-.375 0-.677-.292-.302-.291-.323-.687-.187-2.104-1.073-3.938-.885-1.833-2.291-3.239-1.407-1.406-3.24-2.282Q5.896 6.188 3.792 6q-.396-.042-.688-.344-.292-.302-.292-.698 0-.416.303-.698.302-.281.677-.239 2.5.167 4.708 1.208 2.208 1.042 3.875 2.709 1.667 1.666 2.708 3.874 1.042 2.209 1.229 4.709.021.396-.27.687-.292.292-.709.292Zm-5.25 0q-.375 0-.666-.281-.292-.281-.396-.698-.313-2.021-1.75-3.469-1.438-1.448-3.479-1.76-.417-.084-.698-.386-.282-.302-.282-.698 0-.396.292-.698.292-.302.688-.218 2.854.312 4.885 2.343 2.031 2.032 2.365 4.886.062.396-.23.687-.291.292-.729.292Z" /></svg>
                                            3 Repetidor de sinal
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mt-1 mx-2 text-muted'" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                                                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                                                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                                                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                                            </svg>
                                            Clube de Descontos
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" className='mx-2 text-muted'><path d="M15.458 16.521q-2.291-.209-4.396-1.24-2.104-1.031-3.729-2.666-1.625-1.636-2.666-3.73-1.042-2.093-1.229-4.406-.042-.437.25-.76.291-.323.75-.323h2.166q.396 0 .667.219.271.218.375.593l.437 1.771q.042.271-.031.531-.073.261-.281.448L5.854 8.833q1 1.75 2.313 3.063 1.312 1.312 3.041 2.229l1.959-1.917q.229-.229.448-.27.218-.042.468 0l1.667.374q.375.084.594.365.218.281.218.677v2.167q0 .562-.395.791-.396.23-.709.209ZM5.375 7.771l1.563-1.5q.041-.042.052-.094.01-.052-.011-.094l-.354-1.479q-.021-.062-.063-.094-.041-.031-.104-.031H4.667q-.063 0-.094.031-.031.032-.031.073.062.792.281 1.594.219.802.552 1.594Zm6.917 6.854q.75.333 1.562.51.813.177 1.521.24.042 0 .073-.031.031-.032.031-.073v-1.792q0-.062-.031-.104-.031-.042-.094-.063L14 13.021q-.042-.021-.083 0l-.084.041ZM5.375 7.771Zm6.917 6.854Z" /></svg>
                                            Telefone fixo ilimitado
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="card mb-4 rounded-3 shadow-sm ">
                        <div className='card-planos'>

                            <div class="card-header py-3" style={{ background: '#DCDCDC' }}>
                                <h4 class="my-0 fw-normal">Silver</h4>
                            </div>
                            <div class="card-body ">
                                <small class="text-muted fw-light"><p className='text-start mb-0'>Download</p></small>
                                <h3 class="my-0 mb-3 fw-normal offer_title text-start">200 MEGA</h3>
                                <small class="text-muted fw-light"><p className='text-start mb-0'>Upload</p></small>
                                <h3 class="my-0 mb-3 fw-normal offer_title text-start">150 MEGA</h3>
                                <small class="text-muted fw-light"><p className='text-start mb-0'>Apenas</p></small>
                                <h2 class="card-title pricing-card-title fw-light text-start">R$250,00<small class="text-muted fw-light">/mês</small></h2>

                                  <button type="button" class="w-100 btn btn-lg btn-primary mt-3" onClick={() => navigate('/contrate-empresa')}>Assinar</button>
                            </div>
                            <div class="card-footer" style={{ background: '#DCDCDC' }}>
                                <div id="ultra-collapse-text">
                                    <small class="text-muted fw-light"><p className='text-start mb-0'>Benefícios do plano:</p></small>
                                    <ul class="list-unstyled mt-3 mb-4 text-start">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" className='mx-2 text-muted'><path d="M4.375 17.083q-.667 0-1.135-.458-.469-.458-.469-1.125v-2.646q0-.666.469-1.125.468-.458 1.135-.458h7.937V8.792q0-.271.209-.469.208-.198.458-.198.271 0 .469.198.198.198.198.469v2.479h1.708q.667 0 1.125.458.459.459.459 1.125V15.5q0 .667-.459 1.125-.458.458-1.125.458Zm10.979-1.333q.125 0 .188-.073.062-.073.062-.177v-2.646q0-.104-.062-.177-.063-.073-.188-.073H4.375q-.125 0-.198.073-.073.073-.073.177V15.5q0 .104.073.177t.198.073Zm-8.896-1.562q0-.313-.208-.521-.208-.209-.542-.209-.312 0-.52.209-.209.208-.209.521 0 .312.209.52.208.209.52.209.334 0 .542-.209.208-.208.208-.52Zm2.834 0q0-.313-.209-.521-.208-.209-.541-.209-.313 0-.521.209-.209.208-.209.521 0 .312.209.52.208.209.521.209.333 0 .541-.209.209-.208.209-.52Zm2.083.729q.333 0 .542-.209.208-.208.208-.52 0-.313-.208-.521-.209-.209-.542-.209-.313 0-.521.209-.208.208-.208.521 0 .312.208.52.208.209.521.209Zm-.521-8.271q-.208-.208-.198-.479.011-.271.24-.417.458-.333.979-.5.521-.167 1.104-.167.604 0 1.104.167.5.167.979.5.23.146.25.406.021.261-.208.49-.166.187-.427.208-.26.021-.573-.125-.25-.125-.521-.219-.271-.093-.583-.093-.333 0-.615.093-.281.094-.531.219-.312.146-.573.125-.26-.021-.427-.208ZM8.667 4.5q-.209-.208-.188-.458.021-.25.229-.438.875-.708 1.959-1.114 1.083-.407 2.312-.407 1.229 0 2.313.407 1.083.406 1.979 1.114.208.188.219.448.01.26-.219.469-.167.167-.438.187-.271.021-.5-.166-.666-.542-1.5-.834-.833-.291-1.854-.291-1 0-1.833.291-.834.292-1.5.834-.229.187-.511.156-.281-.031-.468-.198ZM4.104 15.75v-3.146 3.146Z" /></svg>
                                            WI-FI 6 1500 Mbps
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" className='mx-2 text-muted'><path d="M4.125 17.5q-.542 0-.927-.385-.386-.386-.386-.927 0-.521.386-.907.385-.385.927-.385t.927.385q.386.386.386.907 0 .541-.386.927-.385.385-.927.385Zm11.208 0q-.375 0-.677-.292-.302-.291-.323-.687-.187-2.104-1.073-3.938-.885-1.833-2.291-3.239-1.407-1.406-3.24-2.282Q5.896 6.188 3.792 6q-.396-.042-.688-.344-.292-.302-.292-.698 0-.416.303-.698.302-.281.677-.239 2.5.167 4.708 1.208 2.208 1.042 3.875 2.709 1.667 1.666 2.708 3.874 1.042 2.209 1.229 4.709.021.396-.27.687-.292.292-.709.292Zm-5.25 0q-.375 0-.666-.281-.292-.281-.396-.698-.313-2.021-1.75-3.469-1.438-1.448-3.479-1.76-.417-.084-.698-.386-.282-.302-.282-.698 0-.396.292-.698.292-.302.688-.218 2.854.312 4.885 2.343 2.031 2.032 2.365 4.886.062.396-.23.687-.291.292-.729.292Z" /></svg>
                                            3 Repetidor de sinal
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mt-1 mx-2 text-muted'" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                                                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                                                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                                                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                                            </svg>
                                            Clube de Descontos
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" className='mx-2 text-muted'><path d="M15.458 16.521q-2.291-.209-4.396-1.24-2.104-1.031-3.729-2.666-1.625-1.636-2.666-3.73-1.042-2.093-1.229-4.406-.042-.437.25-.76.291-.323.75-.323h2.166q.396 0 .667.219.271.218.375.593l.437 1.771q.042.271-.031.531-.073.261-.281.448L5.854 8.833q1 1.75 2.313 3.063 1.312 1.312 3.041 2.229l1.959-1.917q.229-.229.448-.27.218-.042.468 0l1.667.374q.375.084.594.365.218.281.218.677v2.167q0 .562-.395.791-.396.23-.709.209ZM5.375 7.771l1.563-1.5q.041-.042.052-.094.01-.052-.011-.094l-.354-1.479q-.021-.062-.063-.094-.041-.031-.104-.031H4.667q-.063 0-.094.031-.031.032-.031.073.062.792.281 1.594.219.802.552 1.594Zm6.917 6.854q.75.333 1.562.51.813.177 1.521.24.042 0 .073-.031.031-.032.031-.073v-1.792q0-.062-.031-.104-.031-.042-.094-.063L14 13.021q-.042-.021-.083 0l-.084.041ZM5.375 7.771Zm6.917 6.854Z" /></svg>
                                            Telefone fixo ilimitado
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="display-6 text-center mb-4">Compare os planos</h2>
            <div class="table-responsive">
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Gold</th>
                            <th>Silver</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" class="text-start">WI-FI 6

                                {['top'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                    O<strong> Wi-Fi 6 </strong> é o novo padrão que representa a sexta geração de internet sem fio.
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" class="text-start">Clube de Descontos
                                {['top'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                    <strong>Aplicativo</strong> que garante descontos com mais de 3 mil marcas e 25 mil estabelecimentos.
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>


                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <th scope="row" class="text-start">Suporte SLA de 24 horas
                                {['top'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                    <strong>Suporte 24 horas,</strong>tem prioridade de atendimento em caso de qualquer problema.
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg></td>

                        </tr>

                        <tr>
                            <th scope="row" class="text-start">Telefone fixo
                                {['top'].map((placement) => (
                                    <OverlayTrigger trigger="click" key={placement} placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                    <strong>Linha de telefone fixo</strong> com 100 minutos para qualquer operadora e recebimento ilimitado.
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>

                        </tr>

                        <tr>
                            <th scope="row" class="text-start">Velocidade de Download
                                {['top'].map((placement) => (
                                    <OverlayTrigger trigger="click" key={placement} placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                    <strong>Download:</strong> A velocidade para baixar um arquivo da Internet para um dispositivo, como imagens, vídeos, músicas e documentos.
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <b>500 Mega</b>
                            </td>
                            <td>
                                <b>200 Mega</b>
                            </td>

                        </tr>

                        <tr>
                            <th scope="row" class="text-start">Velocidade de Upload
                                {['top'].map((placement) => (
                                    <OverlayTrigger trigger="click" key={placement} placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                    <strong>Upload:</strong> A velocidade de envio de arquivos (fotos, documentos em texto, sons e vídeos) do seu (computador, celular ou outro dispositivo) para um sistema externo remoto.
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <b>250 Mega</b>
                            </td>
                            <td>
                                <b>150 Mega</b>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
}
export default Planosfibra;