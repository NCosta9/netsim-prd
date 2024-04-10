import Vantagens from '../../components/Vantagens';
import Header from '../../components/Header/Header'
import './Fibra.css';
import Perguntasfrequentes from '../../components/Perguntasfrequentes';
import Telefonefixo from '../../components/Telefonefixo';
import Playhub from '../../components/Playhub';
import Lecupon from '../../components/Lecupon';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Planosempresariais from '../../components/Planosempresariais';
import ContatoWhatsapp from '../../components/ContatoWhatsapp';
import CarouselBanner from '../../components/Carousel/CarouselBanner';
import Planosfibra from '../../components/Planosfibra/PlanoFibra';
import FooterCliente from '../../components/Footer/FooterCliente';
import PlanoFibraTV from '../../components/Planosfibra/PlanoFibraTV';
import CarouselFilmes from '../../components/Carousel/NetsimPlay/Filmes/CarouselFilmes';
import CarouselFibra from '../../components/Carousel/CarouselFibra';
import PorquePrecisa from '../../components/Features/PorquePrecisa';




function Fibra() {
  return (
    <>
      <Header />
      <div className="bgFundo">
        {/*Onde inicia o Banner rotativo */}
        <div className="mx-0">
         <CarouselFibra/>
        </div>{/*fim Banner rotativo */}

        <Vantagens />
          <div id="Valores-Planos" class="pricing-header p-3 pb-md-4 mx-auto text-center  ">
            <h1 class="display-4 fw-normal">Planos Fibra ótica</h1>
            <p class="fs-5 text-muted">Temos os melhores planos fibra ótica da cidade. </p>
              <Tabs defaultActiveKey="residencial" id="justify-tab-example" className='mb-5' justify>
                <Tab eventKey="residencial" title="Planos Residencial">
                  <PlanoFibraTV/>
                </Tab>

                <Tab eventKey="empresarial" title="Planos Empresarial">
                  <Planosempresariais />
                </Tab>
              </Tabs>


          </div>
<PorquePrecisa/>

        <CarouselFilmes/>
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
        <FooterCliente/>
      </div>
      <ContatoWhatsapp />





    </>
  )
}
export default Fibra;