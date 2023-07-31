import './PlanosFibra.css';
import { useNavigate } from 'react-router-dom';

function PlanosRadio() {

    const navigate = useNavigate();


    return (
        <>

            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center ">
                <div className="col-md-3 mx-auto">
                    <div className="card mb-4 rounded-3 shadow-sm border-primary ">
                        <div className='card-planos'>

                            <div className="card-header text-bg-primary border-primary py-3 ">

                                <h4 className="my-0 fw-normal text-light">Inter Digital <span id="especific" className="position-absolute top-0 start-50 translate-middle badge rounded-1 bg-orange">
                                    Popular
                                </span>
                                </h4>
                            </div>
                            <div className="card-body ">
                                <small className="text-muted fw-light"><p className="text-start mb-0">Velocidade</p></small>
                                <h3 className="my-0 mb-3 fw-normal offer_title text-start ">20 a 50 MEGA</h3>
                                <small className="text-muted fw-light"><p className="text-start mb-3 text-dark">*A velocidade maxima varia de acordo com o dispositivo do cliente</p></small>
                                <small className="text-muted fw-light"><p className="text-start mb-0">Apenas</p></small>
                                <h2 className="card-title pricing-card-title fw-light text-start">R$99,90<small className="text-muted fw-light">/mês</small></h2>

                                <button type="button" class="w-100 btn btn-lg btn-primary mt-3" onClick={() => navigate('/inter')}>Assinar</button>

                            </div>

                            <div className="card-footer" style={{ background: '#DCDCDC' }}>
                                <small className="text-muted fw-light"><p className='text-start mb-0'>Benefícios do plano:</p></small>

                                <ul className="list-unstyled mt-3 mb-4 text-start">
                                    <li>
                                        <svg xmlns="https://www.w3.org/2000/svg" height="20" width="20" className='mx-2 text-muted'><path d="M4.375 17.083q-.667 0-1.135-.458-.469-.458-.469-1.125v-2.646q0-.666.469-1.125.468-.458 1.135-.458h7.937V8.792q0-.271.209-.469.208-.198.458-.198.271 0 .469.198.198.198.198.469v2.479h1.708q.667 0 1.125.458.459.459.459 1.125V15.5q0 .667-.459 1.125-.458.458-1.125.458Zm10.979-1.333q.125 0 .188-.073.062-.073.062-.177v-2.646q0-.104-.062-.177-.063-.073-.188-.073H4.375q-.125 0-.198.073-.073.073-.073.177V15.5q0 .104.073.177t.198.073Zm-8.896-1.562q0-.313-.208-.521-.208-.209-.542-.209-.312 0-.52.209-.209.208-.209.521 0 .312.209.52.208.209.52.209.334 0 .542-.209.208-.208.208-.52Zm2.834 0q0-.313-.209-.521-.208-.209-.541-.209-.313 0-.521.209-.209.208-.209.521 0 .312.209.52.208.209.521.209.333 0 .541-.209.209-.208.209-.52Zm2.083.729q.333 0 .542-.209.208-.208.208-.52 0-.313-.208-.521-.209-.209-.542-.209-.313 0-.521.209-.208.208-.208.521 0 .312.208.52.208.209.521.209Zm-.521-8.271q-.208-.208-.198-.479.011-.271.24-.417.458-.333.979-.5.521-.167 1.104-.167.604 0 1.104.167.5.167.979.5.23.146.25.406.021.261-.208.49-.166.187-.427.208-.26.021-.573-.125-.25-.125-.521-.219-.271-.093-.583-.093-.333 0-.615.093-.281.094-.531.219-.312.146-.573.125-.26-.021-.427-.208ZM8.667 4.5q-.209-.208-.188-.458.021-.25.229-.438.875-.708 1.959-1.114 1.083-.407 2.312-.407 1.229 0 2.313.407 1.083.406 1.979 1.114.208.188.219.448.01.26-.219.469-.167.167-.438.187-.271.021-.5-.166-.666-.542-1.5-.834-.833-.291-1.854-.291-1 0-1.833.291-.834.292-1.5.834-.229.187-.511.156-.281-.031-.468-.198ZM4.104 15.75v-3.146 3.146Z" /></svg>
                                        AC 750 Mbps
                                    </li>

                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mt-1 mx-2 text-muted'" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                                            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                                            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                                            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                                        </svg>
                                        Clube de Descontos
                                    </li>

                                </ul>
                            </div>
                        </div>




                    </div>
                </div>
            </div>

        </>
    );
}
export default PlanosRadio;