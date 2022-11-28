import Timeline1 from '../../components/Timeline1';
import Header from '../../components/Header'
import './Fibra.css';
import Perguntasfrequentes from '../../components/Perguntasfrequentes';
import Telefonefixo from '../../components/Telefonefixo';
import Playhub from '../../components/Playhub';
import Lecupon from '../../components/Lecupon';
import Footer from '../../components/Footer';
import BannerFibra from '../../components/BannerFibra';
import Planosfibra from '../../components/Planosfibra';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Planosempresariais from '../../components/Planosempresariais';

function Fibra() {
  return (
    <>
      <Header />
      <div className="bgFundo">
        <BannerFibra />
        <div class="container-fluid">
          <div id="cardCentral" class="card shadow-lg p-5 ">
            <Timeline1 />
            <div id="Valores-Planos" class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">Planos</h1>
                <p class="fs-5 text-muted">Temos os melhores planos fibra ótica da cidade. </p>
            </div>

              <Tabs defaultActiveKey="residencial" id="justify-tab-example" className="mb-5" justify>
              <Tab eventKey="residencial" title="Planos Residencial">
                <Planosfibra/>
              </Tab>
              <Tab eventKey="empresarial" title="Planos Empresarial">
                <Planosempresariais/>
              </Tab>
            </Tabs>
            

           
          </div>
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





    </>
  )
}
export default Fibra;