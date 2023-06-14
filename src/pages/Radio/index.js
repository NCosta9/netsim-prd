import Vantagens from '../../components/Vantagens';
import Header from '../../components/Header'
import './Fibra.css';
import Perguntasfrequentes from '../../components/Perguntasfrequentes';
import Telefonefixo from '../../components/Telefonefixo';
import Playhub from '../../components/Playhub';
import Lecupon from '../../components/Lecupon';
import Footer from '../../components/Footer';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PlanosRadio from '../../components/PlanosRadio';
import DuvidasBeneficios from '../../components/Perguntasfrequentes/DuvidasBeneficios';
import CarouselBanner from '../../components/Carousel/CarouselBanner';


function Radio() {
  return (
    <>
      <Header />
      <div className="bgFundo">
         {/*Onde inicia o Banner rotativo */}
      <div className="mx-0">
        <CarouselBanner/>
      </div>{/*fim Banner rotativo */}

        <div className="container-fluid">
          <div id="cardCentral" className=" p-5 ">
            <Vantagens />
            <div id="Valores-Planos" className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal">Planos Via Rádio</h1>
                <p className="fs-5 text-muted">Temos os melhores planos Via Rádio da cidade. </p>
            </div>

              <Tabs defaultActiveKey="residencial" id="justify-tab-example" className="mb-5" justify>
              <Tab eventKey="residencial" title="Planos Residencial">
                <PlanosRadio/>
              </Tab>
              <Tab eventKey="empresarial" title="Planos Empresarial">
                <p className='fs-3 fw-bold my-5 text-center'> Ainda não temos Planos Especiais para Empresas na tecnologia Via radio disponivél no momento!!</p>
                {/* <Planosempresariais/> */}
              </Tab>
            </Tabs>
          </div>

          <DuvidasBeneficios className="p-5"/>
          
        </div>
        <Playhub />
        <div className="container my-5">
          <Telefonefixo />
        </div>
        <div className="my-5">
          <Lecupon />
        </div>
        <div className="container my-5">
          <h1 className="display-4 fw-bold lh-1 text-center my-5 ">Perguntas Frequentes</h1>

          <Perguntasfrequentes />
        </div>
        <Footer />
      </div>





    </>
  )
}
export default Radio;