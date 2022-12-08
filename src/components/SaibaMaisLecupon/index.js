import imglecupon from './Img-lecupon.png'


export default function SaibaMaisLecupon() {

  const LecuponStyle = {
    color: 'blue',
    width:'100%'
};


    return (
        <>

    <div class="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden fundo-lecupon">
      <div class="my-3 py-3">
        <h2 class="display-5">Clube de descontos Netsim</h2>
        <h5>DESCONTOS EM MAIS DE 24 MIL ESTABELECIMENTOS</h5>
        <p class="lead">
          Basta seguir o passo a passo abaixo para conseguir utilizar nosso aplicativo de descontos. 
        </p>
      </div>
      <div class=" shadow-sm mx-auto fundo-lecupon rounded-top" ><img class="imglecupon"src={imglecupon} style={LecuponStyle}/></div>
    </div>

</>

    )
}
