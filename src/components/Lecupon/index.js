import './Lecupon.css';
import imglecupon from './Img-lecupon.png'
function Lecupon() {
    return (
        <>

    <div class="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden fundo-lecupon">
      <div class="my-3 py-3">
        <h2 class="display-5">Clube de descontos Netsim</h2>
        <h5>DESCONTOS EM MAIS DE 24 MIL ESTABELECIMENTOS</h5>
        <p class="lead">Automaticamente você ganha como nosso cliente  acesso ao nosso clube de descontos que garante descontos em estabelecimentos na sua região e em mais de 24 mil espalhados pelo Brasil.  </p>
      </div>
      <div class=" shadow-sm mx-auto fundo-lecupon rounded-top" ><img class="imglecupon"src={imglecupon}/></div>
    </div>

</>

    )
}

export default Lecupon;