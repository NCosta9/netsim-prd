import imglecupon from './Img-lecupon.png'
import imgClubeNetsim from '../../img/img-clube-netsim.png'
import logoClubeNetsim from '../../img/logo-icon-netsim.jpg'

import './SaibaMaisLecupon.css'


export default function SaibaMaisLecupon() {

  const imgStyle = {
    width: '9rem',
  };
  const clubeStyle = {
    maxWidth: '100%',
    width: '50rem',
  };
  const logoclubeStyle = {
    width: '3.5rem',
    borderRadius: '10px',
  };

  return (
    <>



      <div className="text-bg-primary me-md-3  pt-md-5 px-md-5 text-center overflow-hidden fundo-lecupon">

        <div className="my-3 py-3">
          <img className='' src={logoClubeNetsim} style={logoclubeStyle} />
          <h2 className="display-5">Clube Netsim</h2>
          <h5 className='fs-3 fw-light'>Descontos e benefícios em mais de 24 mil marcas em todo o Brasil e 100% gratuito para os clientes da Netsim.</h5>
          <img className='' src={imgClubeNetsim} style={clubeStyle} />
        </div>
        <div className='my-4 p-3'>
          <p className="lead fs-3 fw-light">
            Disponível em diversas lojas de aplicativos. Basta clicar nos botões abaixo para realizar o download.
          </p>
          <a href='https://apps.apple.com/br/app/clube-netsim/id1578553297'> <img className='' src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/Lojas%20de%20Apps/loja-apple.png?t=2023-12-08T17%3A44%3A36.943Z' style={imgStyle} /> </a>
          <a href='https://play.google.com/store/apps/details?id=br.com.clube.netsim'> <img className='' src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/Lojas%20de%20Apps/loja-google.png?t=2023-12-08T17%3A44%3A36.943Z' style={imgStyle} /> </a>
        </div>
        <p className='my-2 d-sm-none'>Arraste a imagem para o lado para Visualizar como configurar passo a passo.</p>
        <div className="scroll-container">
          <div className="gridscroll shadow-sm mx-auto fundo-lecupon rounded-top" >
            <img className="image-response imglecupon" src={imglecupon} />
          </div>
        </div>

      </div>

    </>

  )
}
