import SaibaMaisLecupon from '../../components/SaibaMaisLecupon';

import Modals from "../Modals";
export default function HeaderCliente() {

    return (
        <>


            <header id="header-cliente" class=" d-flex align-items-center  ">
                <div class="container d-flex align-items-center justify-content-between">

                    <a href="/" class="logo"><img src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/logos/logoBranca.png" alt="" class="img-fluid" /></a>

                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><a class="nav-link scrollto active" href="/">Home</a></li>
                            <li><a class="nav-link scrollto" href="/cobertura">Planos</a></li>


                            <li class="dropdown"><a href="#"><span>Aplicativos</span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li class="dropdown"><a href="#"><span>Clube de Descontos</span> <i class="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="https://app.netsimtelecom.com.br/">Acessar</a></li>
                                            <li>
                                                <Modals
                                                    className="btn-outline"
                                                    title="Clube de desconto"
                                                    buttonName="Como Logar"
                                                    conteudo={<SaibaMaisLecupon />}

                                                />

                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#"><span>Portal de Aplicativos</span> <i class="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="https://www.portaldoassinante.com/netsim">Acessar</a></li>
                                            <li>

                                                <Modals
                                                    title="Clube de desconto"
                                                    buttonName="Como Logar"
                                                    conteudo={<iframe src="https://comologar.com.br/" name="comologarapps" width="100%" height="100%"></iframe>}

                                                />

                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#"><span>Central do Cliente</span> <i class="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="https://ixc.netsimtelecom.com.br/central_assinante_web/login">Acessar</a></li>
                                            <li>
                                                <a href="https://qrco.de/bcWAGR">Baixar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#"><span>App TV Netsim Play</span> <i class="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="https://play.netsimtelecom.com.br/">Acessar</a></li>
                                            <li><a href="#">Como Logar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/cliente">Todos os Apps</a></li>
                                </ul>
                            </li>

                            <li class="dropdown"><a class="nav-link scrollto" href="#services">Serviços <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="https://netsimtelecom.com.br/mudanca">Mudança de endereço</a></li>
                                    <li><a href="https://netsimtelecom.com.br/ponto">Mudança de Ponto</a></li>
                                    <li><a href="https://netsimtelecom.com.br/titularidade">Mudança de Titularidade</a></li>
                                    <li><a href="https://netsimtelecom.com.br/cobertura">Mudança de Plano</a></li>
                                </ul>
                            </li>

                            <li><a class="nav-link scrollto" href="/cliente">Área do Cliente</a></li>
                            <li><a href="/blog">Blog</a></li>

                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </>
    )
}