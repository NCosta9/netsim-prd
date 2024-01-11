import Vantagens from '../../components/Vantagens';
import Header from '../../components/Header/Header'
import './Fibra.css';
import Perguntasfrequentes from '../../components/Perguntasfrequentes';
import Lecupon from '../../components/Lecupon';
import PlanosRadio from '../../components/PlanosRadio';
import CarouselBanner from '../../components/Carousel/CarouselBanner';
import FooterCliente from '../../components/Footer/FooterCliente';


function Radio() {
  return (
    <>
      <Header />
      <div className="bgFundo">
        {/*Onde inicia o Banner rotativo */}
        <div className="mx-0">
          <CarouselBanner />
        </div>{/*fim Banner rotativo */}

        <div className="container-fluid">
          <div id="cardCentral" className=" p-5 ">
            <Vantagens />
            <div id="Valores-Planos" className=" pricing-header p-3 pb-md-4 mx-auto text-center ">
              <h1 className="display-4 fw-normal">Plano Via Rádio</h1>
              <p className="fs-5 text-muted">Temos o melhor plano Via Rádio da cidade. </p>
              <div className='mt-5'><PlanosRadio /></div>
            </div>
          </div>

        </div>

        <div className="my-5">
          <Lecupon />
        </div>
        <div className="container my-5">
          <h1 className="display-4 fw-bold lh-1 text-center my-5 ">Perguntas Frequentes</h1>

          <Perguntasfrequentes />
        </div>
       <FooterCliente/>
      </div>





    </>
  )
}
export default Radio;