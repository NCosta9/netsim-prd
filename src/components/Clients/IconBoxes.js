import SaibaMaisLecupon from '../../components/SaibaMaisLecupon';

import Modals from "../Modals";

export default function IconBoxes() {
    return (
        <>
            <section id="icon-boxes" className="icon-boxes">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-cash"></i></div>
                                <h4 className="title"><a href="">Clube de Descontos</a></h4>
                                <p className="description">Aplicativo de descontos em mais de 3 mil estabelecimento pelo brasil totalmente gratuito.</p>
                                <div className="d-flex flex-column">
                                    <a className="btn btn-primary my-1" href='https://qrco.de/bcW6T9'>Acessar</a>

                                    <Modals
                                    className="btn-outline"
                                        title="Clube de desconto"
                                        buttonClass="btn btn-outline-primary my-2 mx-0"
                                        buttonName="Configurar"
                                        conteudo={<SaibaMaisLecupon />}

                                    />

                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-file"></i></div>
                                <h4 className="title"><a href="">Portal de Aplicativos</a></h4>
                                <p className="description">Local para o cliente escolher os aplicativos que faz parte do seu plano internet</p>
                                <div className="d-flex flex-column">

                                    <a className="btn btn-primary my-1" href='https://www.portaldoassinante.com/netsim'>Acessar</a>

                                    <Modals
                                        title="Clube de desconto"
                                        buttonClass="btn btn-outline-primary my-2 mx-0"
                                        buttonName="Configurar"
                                        conteudo={<iframe src="https://comologar.com.br/" name="comologarapps" width="100%" height="100%"></iframe>}

                                    />

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-receipt"></i></div>

                                <h4 className="title"><a href="">App Central do Cliente</a></h4>
                                <p className="description">Aplicativos para acompanhamento e pagamento de faturas via pix, ou baixar boleto bancario</p>
                                <div className="buttons d-flex flex-column">

                                    <a className="btn btn-primary my-1" href='https://ixc.netsimtelecom.com.br/central_assinante_web/login'>Acessar</a>
                                    <a className="btn btn-outline-primary my-2 mx-0" href='https://qrco.de/bcWAGR'>Acessar</a>
                                  

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-tv"></i></div>

                                <h4 className="title"><a href="">Netsim Play- TV </a></h4>
                                <p className="description">Aplicativo de canais de televisão para clientes da Netsim baixar e configurar em TVs e Celulares</p>
                                <div className="d-flex flex-column">

                                    <a className="btn btn-primary my-1" href='https://play.netsimtelecom.com.br/'>Acessar</a>
                                    <a className="btn btn-outline-primary my-2 mx-0" href='https://play.netsimtelecom.com.br/'>Acessar</a>
                                   

                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </section >

        </>
    )
}