import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './PlanosFibra.css';
import ModalVerMaisPremium from '../ModalVerMaisPremium';
import ModalVerMaisStandard from '../ModalVerMaisStandard';
import { useNavigate } from 'react-router-dom';
import VelocidadePlanos from '../DadosPlanos/VelocidadePlanos';


export default function PlanoResidencialTV() {


    const navigate = useNavigate()

    //velocidade dos planos via props
    const lite = 450;
    const basic = 550;
    const plus = 700;
    const ultra = 850;

    const premium =  <div class="d-inline gap-2 d-sm-flex justify-content-sm-center ms-3">
    <img className="ms-1" height="20" width="20" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/ritualfit' />
    <img className="ms-1" height="20" width="20" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/doutorpass' />
    <img className="ms-1" height="20" width="20" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/hbomax' />
    <ModalVerMaisPremium />
</div>;

    const standard = <div className="d-inline gap-2 d-sm-flex justify-content-sm-center ms-3">
        <img className="ms-1" height="20" width="20" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/playkids' />
        <img className="ms-1" height="20" width="20" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/deezer' />
        <img className="ms-1" height="20" width="20" src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/apps/looke' />
        <ModalVerMaisStandard />
    </div>;

    const positivo = <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#008000" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z" clip-rule="evenodd" /></svg>;
    const negativo = <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#ff0000" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12z" /></svg>;

    return (
        <>
            <div id="card-fibra" className=" d-flex mx-0 justify-content-center row row-cols-1 row-cols-md-3 mb-3 text-center ">
                {[
                    {
                        titulo: "Lite +TV",
                        mega: "450",
                        valor: "R$119,90",
                        link: "/lite-tv",
                        roteador: <li><svg xmlns="https://www.w3.org/2000/svg" height="20" width="20" className='me-1 text-muted'>
                            <path fill='#001a4c' d="M4.375 17.083q-.667 0-1.135-.458-.469-.458-.469-1.125v-2.646q0-.666.469-1.125.468-.458 1.135-.458h7.937V8.792q0-.271.209-.469.208-.198.458-.198.271 0 .469.198.198.198.198.469v2.479h1.708q.667 0 1.125.458.459.459.459 1.125V15.5q0 .667-.459 1.125-.458.458-1.125.458Zm10.979-1.333q.125 0 .188-.073.062-.073.062-.177v-2.646q0-.104-.062-.177-.063-.073-.188-.073H4.375q-.125 0-.198.073-.073.073-.073.177V15.5q0 .104.073.177t.198.073Zm-8.896-1.562q0-.313-.208-.521-.208-.209-.542-.209-.312 0-.52.209-.209.208-.209.521 0 .312.209.52.208.209.52.209.334 0 .542-.209.208-.208.208-.52Zm2.834 0q0-.313-.209-.521-.208-.209-.541-.209-.313 0-.521.209-.209.208-.209.521 0 .312.209.52.208.209.521.209.333 0 .541-.209.209-.208.209-.52Zm2.083.729q.333 0 .542-.209.208-.208.208-.52 0-.313-.208-.521-.209-.209-.542-.209-.313 0-.521.209-.208.208-.208.521 0 .312.208.52.208.209.521.209Zm-.521-8.271q-.208-.208-.198-.479.011-.271.24-.417.458-.333.979-.5.521-.167 1.104-.167.604 0 1.104.167.5.167.979.5.23.146.25.406.021.261-.208.49-.166.187-.427.208-.26.021-.573-.125-.25-.125-.521-.219-.271-.093-.583-.093-.333 0-.615.093-.281.094-.531.219-.312.146-.573.125-.26-.021-.427-.208ZM8.667 4.5q-.209-.208-.188-.458.021-.25.229-.438.875-.708 1.959-1.114 1.083-.407 2.312-.407 1.229 0 2.313.407 1.083.406 1.979 1.114.208.188.219.448.01.26-.219.469-.167.167-.438.187-.271.021-.5-.166-.666-.542-1.5-.834-.833-.291-1.854-.291-1 0-1.833.291-.834.292-1.5.834-.229.187-.511.156-.281-.031-.468-.198ZM4.104 15.75v-3.146 3.146Z" />
                        </svg>WI-FI AC 1200 Mbps</li>,
                        repetidor: negativo,
                        clube: positivo,
                        telefone: negativo,
                        canais: positivo,
                        filmes: negativo,
                        box: negativo,
                        mudanca: negativo,
                        premium: negativo,
                        standard: negativo,


                    },
                    {
                        status: <span className="advanced">Popular</span>,
                        titulo: "Basic +TV",
                        mega: "550",
                        valor: "R$129,90",
                        link: "/basic-tv",
                        roteador: <li><svg xmlns="https://www.w3.org/2000/svg" height="20" width="20" className='me-1 text-muted'>
                            <path fill='#001a4c' d="M4.375 17.083q-.667 0-1.135-.458-.469-.458-.469-1.125v-2.646q0-.666.469-1.125.468-.458 1.135-.458h7.937V8.792q0-.271.209-.469.208-.198.458-.198.271 0 .469.198.198.198.198.469v2.479h1.708q.667 0 1.125.458.459.459.459 1.125V15.5q0 .667-.459 1.125-.458.458-1.125.458Zm10.979-1.333q.125 0 .188-.073.062-.073.062-.177v-2.646q0-.104-.062-.177-.063-.073-.188-.073H4.375q-.125 0-.198.073-.073.073-.073.177V15.5q0 .104.073.177t.198.073Zm-8.896-1.562q0-.313-.208-.521-.208-.209-.542-.209-.312 0-.52.209-.209.208-.209.521 0 .312.209.52.208.209.52.209.334 0 .542-.209.208-.208.208-.52Zm2.834 0q0-.313-.209-.521-.208-.209-.541-.209-.313 0-.521.209-.209.208-.209.521 0 .312.209.52.208.209.521.209.333 0 .541-.209.209-.208.209-.52Zm2.083.729q.333 0 .542-.209.208-.208.208-.52 0-.313-.208-.521-.209-.209-.542-.209-.313 0-.521.209-.208.208-.208.521 0 .312.208.52.208.209.521.209Zm-.521-8.271q-.208-.208-.198-.479.011-.271.24-.417.458-.333.979-.5.521-.167 1.104-.167.604 0 1.104.167.5.167.979.5.23.146.25.406.021.261-.208.49-.166.187-.427.208-.26.021-.573-.125-.25-.125-.521-.219-.271-.093-.583-.093-.333 0-.615.093-.281.094-.531.219-.312.146-.573.125-.26-.021-.427-.208ZM8.667 4.5q-.209-.208-.188-.458.021-.25.229-.438.875-.708 1.959-1.114 1.083-.407 2.312-.407 1.229 0 2.313.407 1.083.406 1.979 1.114.208.188.219.448.01.26-.219.469-.167.167-.438.187-.271.021-.5-.166-.666-.542-1.5-.834-.833-.291-1.854-.291-1 0-1.833.291-.834.292-1.5.834-.229.187-.511.156-.281-.031-.468-.198ZM4.104 15.75v-3.146 3.146Z" />
                        </svg>WI-FI AC 1200 Mbps</li>,
                        repetidor: negativo,
                        clube: positivo,
                        telefone: negativo,
                        canais: positivo,
                        filmes: positivo,
                        box: negativo,
                        mudanca: negativo,
                        premium: negativo,
                        standard: "+2",
                        iconStandard: standard,


                    },
                    {
                        status: <span className="advanced">Recomendado</span>,
                        titulo: "Plus +TV",
                        mega: "700",
                        valor: "R$179,90",
                        link: "/plus-tv",
                        roteador: <li><svg xmlns="https://www.w3.org/2000/svg" height="20" width="20" className=' me-1 text-muted'>
                            <path fill='#001a4c' d="M4.375 17.083q-.667 0-1.135-.458-.469-.458-.469-1.125v-2.646q0-.666.469-1.125.468-.458 1.135-.458h7.937V8.792q0-.271.209-.469.208-.198.458-.198.271 0 .469.198.198.198.198.469v2.479h1.708q.667 0 1.125.458.459.459.459 1.125V15.5q0 .667-.459 1.125-.458.458-1.125.458Zm10.979-1.333q.125 0 .188-.073.062-.073.062-.177v-2.646q0-.104-.062-.177-.063-.073-.188-.073H4.375q-.125 0-.198.073-.073.073-.073.177V15.5q0 .104.073.177t.198.073Zm-8.896-1.562q0-.313-.208-.521-.208-.209-.542-.209-.312 0-.52.209-.209.208-.209.521 0 .312.209.52.208.209.52.209.334 0 .542-.209.208-.208.208-.52Zm2.834 0q0-.313-.209-.521-.208-.209-.541-.209-.313 0-.521.209-.209.208-.209.521 0 .312.209.52.208.209.521.209.333 0 .541-.209.209-.208.209-.52Zm2.083.729q.333 0 .542-.209.208-.208.208-.52 0-.313-.208-.521-.209-.209-.542-.209-.313 0-.521.209-.208.208-.208.521 0 .312.208.52.208.209.521.209Zm-.521-8.271q-.208-.208-.198-.479.011-.271.24-.417.458-.333.979-.5.521-.167 1.104-.167.604 0 1.104.167.5.167.979.5.23.146.25.406.021.261-.208.49-.166.187-.427.208-.26.021-.573-.125-.25-.125-.521-.219-.271-.093-.583-.093-.333 0-.615.093-.281.094-.531.219-.312.146-.573.125-.26-.021-.427-.208ZM8.667 4.5q-.209-.208-.188-.458.021-.25.229-.438.875-.708 1.959-1.114 1.083-.407 2.312-.407 1.229 0 2.313.407 1.083.406 1.979 1.114.208.188.219.448.01.26-.219.469-.167.167-.438.187-.271.021-.5-.166-.666-.542-1.5-.834-.833-.291-1.854-.291-1 0-1.833.291-.834.292-1.5.834-.229.187-.511.156-.281-.031-.468-.198ZM4.104 15.75v-3.146 3.146Z" />
                        </svg>WI-FI 6 1500 Mbps</li>,
                        repetidor: positivo,
                        clube: positivo,
                        telefone: positivo,
                        canais: positivo,
                        filmes: positivo,
                        box: positivo,
                        mudanca: positivo,
                        premium: " +1",
                        standard: "  +2",
                        iconPremium: premium,
                        iconStandard: standard,

                    },
                    {

                        titulo: "Ultra +TV",
                        mega: "850",
                        valor: "R$219,90",
                        link: "/ultra-tv",
                        roteador: <li><svg xmlns="https://www.w3.org/2000/svg" height="20" width="20" className='me-1 text-muted'>
                            <path fill='#001a4c' d="M4.375 17.083q-.667 0-1.135-.458-.469-.458-.469-1.125v-2.646q0-.666.469-1.125.468-.458 1.135-.458h7.937V8.792q0-.271.209-.469.208-.198.458-.198.271 0 .469.198.198.198.198.469v2.479h1.708q.667 0 1.125.458.459.459.459 1.125V15.5q0 .667-.459 1.125-.458.458-1.125.458Zm10.979-1.333q.125 0 .188-.073.062-.073.062-.177v-2.646q0-.104-.062-.177-.063-.073-.188-.073H4.375q-.125 0-.198.073-.073.073-.073.177V15.5q0 .104.073.177t.198.073Zm-8.896-1.562q0-.313-.208-.521-.208-.209-.542-.209-.312 0-.52.209-.209.208-.209.521 0 .312.209.52.208.209.52.209.334 0 .542-.209.208-.208.208-.52Zm2.834 0q0-.313-.209-.521-.208-.209-.541-.209-.313 0-.521.209-.209.208-.209.521 0 .312.209.52.208.209.521.209.333 0 .541-.209.209-.208.209-.52Zm2.083.729q.333 0 .542-.209.208-.208.208-.52 0-.313-.208-.521-.209-.209-.542-.209-.313 0-.521.209-.208.208-.208.521 0 .312.208.52.208.209.521.209Zm-.521-8.271q-.208-.208-.198-.479.011-.271.24-.417.458-.333.979-.5.521-.167 1.104-.167.604 0 1.104.167.5.167.979.5.23.146.25.406.021.261-.208.49-.166.187-.427.208-.26.021-.573-.125-.25-.125-.521-.219-.271-.093-.583-.093-.333 0-.615.093-.281.094-.531.219-.312.146-.573.125-.26-.021-.427-.208ZM8.667 4.5q-.209-.208-.188-.458.021-.25.229-.438.875-.708 1.959-1.114 1.083-.407 2.312-.407 1.229 0 2.313.407 1.083.406 1.979 1.114.208.188.219.448.01.26-.219.469-.167.167-.438.187-.271.021-.5-.166-.666-.542-1.5-.834-.833-.291-1.854-.291-1 0-1.833.291-.834.292-1.5.834-.229.187-.511.156-.281-.031-.468-.198ZM4.104 15.75v-3.146 3.146Z" />
                        </svg>WI-FI 6 1500 Mbps</li>,
                        repetidor: positivo,
                        clube: positivo,
                        telefone: positivo,
                        canais: positivo,
                        filmes: positivo,
                        box: positivo,
                        mudanca: positivo,
                        premium: " +1 ",
                        standard: "  +2",
                        iconPremium: premium,
                        iconStandard: standard,

                    },
                ].map((plano) => (
                    <div className="col-md-3">

                        <div className="card mb-4 ">
                            <div className='card-planos'>
                                {plano.status}
                                    <h4 className="title my-0 "> {plano.titulo} </h4>
                                <div className="card-body ">
                                    <h3 className="my-0 mb-3 offer_title text-center"> {plano.mega} MEGA</h3>
                                    <div className="card-footer pb-5">
                                        <div id="ultra-collapse-text">
                                            <ul className="list-unstyled mt-3 mb-4 text-start text-light">
                                                {plano.roteador}
                                                <li>{plano.clube} Clube de Descontos</li>
                                                <li>{plano.canais} Canais de TV</li>
                                                <li>{plano.filmes} Filmes e Séries</li>
                                                <li>{plano.repetidor} 1 Repetidor de sinal</li>
                                                <li>{plano.box} 1 TV BOX</li>
                                                <li>{plano.telefone} Telefone fixo</li>
                                                <li>{plano.mudanca}1 Mudança no Ano</li>
                                                <li className='mt-2'> {plano.premium} app's Premium</li>
                                                {plano.iconPremium}
                                                <li className='mt-2'>{plano.standard} app's Standard</li>
                                                {plano.iconStandard}
                                            </ul>
                                        </div>
                                    </div>
                                    <h2 className="valor pricing-card-title text-center">{plano.valor}<small className="text-muted fw-light">/mês</small></h2>

                                    <button type="button" className="w-100 btn btn-lg btn-primary mt-3" onClick={() => navigate(`${plano.link}`)}>Assinar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                ))};
            </div>

            <h2 className="display-6 text-center mb-4">Compare os planos</h2>
            <div className="table-responsive">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Lite +TV</th>
                            <th>Basic +TV</th>
                            <th>Plus +TV</th>
                            <th>Ultra +TV</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="text-start">Clube de Descontos
                                {['top'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                    <strong>Aplicativo</strong> que garante descontos em produtos de vários estabelecimentos em sua região e pelo Brasil.
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>

                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Canais de TV
                                {['top'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                    Acesso a todos os Canais de Tv dentro do Netsim Play.
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>

                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Filmes e Séries
                                {['top'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                    Dentro do NetSim Play tem Filmes e series pra você assistir com sua família 
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>

                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>

                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">WI-FI 6

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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" className="text-start">Repetidor de Sinal
                                {['top'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                    <strong>Repetidor</strong> amplifica o sinal do Wifi gerado pelo roteador para que a rede alcance áreas que o sinal não chega...
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>

                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>

                            </td>
                            <td>    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">TV BOX
                                {['top'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                 Ao contratar o plano de internet vai incluso um TV BOX para tornar sua TV SMART e desfrutar do NetSim Play TV
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>

                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>

                            </td>
                            <td>    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Telefone fixo
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">1 Mudança de Endereço Grátis no Ano
                                {['top'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                Caso você tenha que mudar do endereço atual, a Netsim leva sua internet para o endereço novo, sem você precisar pagar taxa.
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>

                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>

                            </td>
                            <td>    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="#008000" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /></svg>

                            </td>
                        </tr>




                    </tbody>

                    <tbody>
                        <tr>
                            <th scope="row" className="text-start">App's Premium
                                {['top'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                    <strong> 4 app's</strong> de esporte, filme e etc.
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>

                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>

                            </td>
                            <td><b>1</b></td>
                            <td><b>1</b></td>
                        </tr>

                        <tr>
                            <th scope="row" className="text-start">App's Standard
                                {['top'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Body>
                                                    <strong>16 app's</strong> diferentes de filme, esporte, musica, documentarios, desenhos e etc.
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>

                            </td>
                            <td><b>2</b></td>
                            <td><b>2</b></td>
                            <td><b>2</b></td>
                        </tr>

                        <tr>
                            <th scope="row" className="text-start">Velocidade de Download
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </OverlayTrigger>
                                ))}
                            </th>
                            <td>
                                <b><VelocidadePlanos velocidade={lite} /> mbps</b>
                            </td>
                            <td>
                                <b><VelocidadePlanos velocidade={basic} /> mbps</b>
                            </td>
                            <td>
                                <b><VelocidadePlanos velocidade={plus} /> mbps</b>
                            </td>
                            <td>
                                <b><VelocidadePlanos velocidade={ultra} /> mbps</b>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    );
}
