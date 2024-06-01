import Modals from '../Modals';
import SaibaMaisLecupon from '../SaibaMaisLecupon';
import './Lecupon.css';
import imglecupon from './img-lecupon-note-cell.png'


function Lecupon() {

  return (
    <>

      <div id="lecupon" className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden fundo-lecupon">
        <div className='row flex-lg-row'>
          <div className='col'>
            <div className="img-lecupon " >
            </div>
          </div>
          <div className='col-lg-6'>
            <div className="px-4 mt-2  text-center">
              <h2 className="display-5 fw-bold">Clube de descontos Netsim</h2>
              <h5>DESCONTOS EM MAIS DE 24 MIL ESTABELECIMENTOS</h5>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Automaticamente você ganha como nosso cliente  acesso ao nosso clube de descontos que garante descontos em estabelecimentos na sua região e em mais de 24 mil espalhados pelo Brasil.  </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Modals
                      title="Clube de desconto"
                      buttonClass="btn-lecupon btn-lg px-4 me-sm-3 my-2 mx-0 text-light"
                      buttonName="Saiba Mais"
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