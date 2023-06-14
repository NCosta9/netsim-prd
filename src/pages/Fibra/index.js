import Vantagens from '../../components/Vantagens';
import Header from '../../components/Header'
import './Fibra.css';
import Perguntasfrequentes from '../../components/Perguntasfrequentes';
import Telefonefixo from '../../components/Telefonefixo';
import Playhub from '../../components/Playhub';
import Lecupon from '../../components/Lecupon';
import Footer from '../../components/Footer';
import Planosfibra from '../../components/Planosfibra';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Planosempresariais from '../../components/Planosempresariais';
import ContatoWhatsapp from '../../components/ContatoWhatsapp';
import DuvidasBeneficios from '../../components/Perguntasfrequentes/DuvidasBeneficios';
import CarouselBanner from '../../components/Carousel/CarouselBanner';




function Fibra() {
  return (
    <>
      <Header />
      <div className="bgFundo">
       {/*Onde inicia o Banner rotativo */}
       <div className="mx-0">
        <CarouselBanner/>
      </div>{/*fim Banner rotativo */}

        <div class="container-fluid">
          <div id="cardCentral" class=" p-5 mb-5 ">
            <Vantagens />
          </div>
          <div id="Valores-Planos" class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">Planos Fibra ótica</h1>
            <p class="fs-5 text-muted">Temos os melhores planos fibra ótica da cidade. </p>

            <Tabs defaultActiveKey="residencial" id="justify-tab-example" className="mb-5 btn btn-light" justify>
              <Tab eventKey="residencial" title="Planos Residencial">
                <Planosfibra />
              </Tab>
              <Tab eventKey="empresarial" title="Planos Empresarial">
                <Planosempresariais />
              </Tab>
            </Tabs>
          </div>

          <DuvidasBeneficios className="p-5" />

        </div>

        <Playhub />
        <div class="container my-5">
          <Telefonefixo />
        </div>
        <div class="my-5">
          <Lecupon />
        </div>
        <div class="container my-5">
          <h1 class="display-4 fw-bold lh-1 text-center my-5 ">Perguntas Frequentes</h1>

          <Perguntasfrequentes />
        </div>
        <Footer />
      </div>
      <ContatoWhatsapp />





    </>
  )
}
export default Fibra;