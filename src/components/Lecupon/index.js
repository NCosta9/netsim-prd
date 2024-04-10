import Modals from '../Modals';
import SaibaMaisLecupon from '../SaibaMaisLecupon';
import './Lecupon.css';
import imglecupon from './app-lecupon.png'


function Lecupon() {

  const LecuponStyle = {
    color: 'blue',
    width: '400px'
  };


  return (
    <>

      <div id="lecupon" className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden fundo-lecupon">
        <div className='row flex-lg-row'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <div className=" shadow-sm mx-auto fundo-lecupon rounded-top" >
              <img className="imglecupon" src={imglecupon} style={LecuponStyle} /></div>
          </div>
          <div className='col-lg-6'>
            <div className="px-4 pt-5  text-center">
              <h2 className="display-5 fw-bold text-body-emphasis">Clube de descontos Netsim</h2>
              <h5>DESCONTOS EM MAIS DE 24 MIL ESTABELECIMENTOS</h5>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Automaticamente você ganha como nosso cliente  acesso ao nosso clube de descontos que garante descontos em estabelecimentos na sua região e em mais de 24 mil espalhados pelo Brasil.  </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Modals
                      title="Clube de desconto"
                      buttonClass="btn-lecupon btn-lg px-4 me-sm-3 my-2 mx-0"
                      buttonName="Configurar"
                      conteudo={<SaibaMaisLecupon/>}
                    />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </>

  )
}

export default Lecupon;