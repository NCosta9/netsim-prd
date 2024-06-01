import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modals from "../Modals";
import SaibaMaisLecupon from '../../components/SaibaMaisLecupon';

export default function Header() {

    const Applist = [
        {
            label: "Clube de descontos",
            description: "App de decontos em estabelecimentos. Consulte seu login!",
            link: "https://qrco.de/bcW6T9",
            config: <Modals
                title="Clube de desconto"
                buttonClass="btn btn-outline-primary"
                buttonName="Configurar"
                conteudo={<SaibaMaisLecupon />}

            />
        },
        {
            label: "Portal de Aplicativos",
            description: "Apps de Streaming. Consulte seu login!",
            link: "https://qrco.de/bcW6T9",
            config: <Modals
                title="Clube de desconto"
                buttonClass="btn btn-outline-primary"
                buttonName="Configurar"
                conteudo={<iframe src="https://comologar.com.br/" name="comologarapps" width="100%" height="100%"></iframe>}

            />
        },
        {
            label: "Central do Cliente",
            description: "App para companhamento e pagamento de fatura via pix e codigo de barras. Consulte seu login!",
            link: "https://ixc.netsimtelecom.com.br/central_assinante_web/login",
            config: <a className="btn btn-outline-primary" href='https://qrco.de/bcWAGR'>Baixar</a>
        },
        {
            label: "Netsim Play- TV",
            description: "App com canais de tv, filmes e séries. Consulte seu login!",
            link: "/netsim-play",
        }

    ]

    return (
        <>
            <Navbar expand="lg" className="sticky-top z-3 shadow-lg" id="menu" >
                <Container >
                    <Navbar.Brand href="#home">
                        <a href="/" class="logo"><img src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/logos/logoAzul?t=2023-12-30T14%3A29%3A22.560Z" height="50px" alt="" class="" /></a>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link className="navlink" href="/">Home</Nav.Link>
                            <Nav.Link className="navlink" href="/cobertura">Planos</Nav.Link>




                            <NavDropdown title="Aplicativos" id="basic-nav-dropdown" className='p-0 style'>
                                <ul class="list-group list-group-flush">

                                    {Applist.map(({ label, description, link, config },key) => {
                                        return (
                                            <li key={Applist.toString() } class="list-group-item">
                                            <span>{label}</span>
                                            <br />
                                            <small className='text-muted '>{description}</small>
                                            <br />
                                            <a href={link} class=" btn btn-outline-secondary " >Acessar</a>
                                            <span  > {config} </span>
    
                                        </li>
                                        );
                                    })}

                                </ul>

                            </NavDropdown>

                            <NavDropdown title="Serviços" id="basic-nav-dropdown" className='dropdown p-0'>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><a href="https://netsimtelecom.com.br/mudanca">Mudança de endereço</a>   </li>
                                    <li class="list-group-item"><a href="https://netsimtelecom.com.br/ponto">Mudança de Ponto</a></li>
                                    <li class="list-group-item"><a href="https://netsimtelecom.com.br/titularidade">Mudança de Titularidade</a></li>
                                    <li class="list-group-item"><a href="https://netsimtelecom.com.br/cobertura">Mudança de Plano</a></li>
                                </ul>

                            </NavDropdown>
                            <Nav.Link className="navlink" href="/cliente">Área do Cliente</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}
