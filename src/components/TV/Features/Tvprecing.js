import './features.css'

export default function Tvprecing() {
  return (
    <>

      <section id="features" class="features" data-aos="fade-up" data-aos-duration="1000">
        <div class="container">

          <div class="row">
            <div class="col-lg-6 order-2 order-lg-1" >
              <div class="icon-box mt-5 mt-lg-0" data-aos="fade-right" data-aos-duration="300">
                <i class="bi bi-check2-circle"></i>
                <h4>Transmissão ao vivo de alta qualidade</h4>

                <p>Desfrute da transmissão contínua e de alta definição dos seus canais favoritos em tempo real.</p>
              </div>
              <div class="icon-box mt-5" data-aos="fade-right" data-aos-duration="500">
                <i class="bi bi-check2-circle"></i>
                <h4>Biblioteca de filmes atualizada</h4>
                <p>Explore uma seleção abrangente de filmes, desde clássicos atemporais até os lançamentos mais recentes.</p>
              </div>
              <div class="icon-box mt-5" data-aos="fade-right" data-aos-duration="700">
                <i class="bi bi-check2-circle"></i>
                <h4>Séries para maratonar com quem ama</h4>
                <p> Mergulhe em séries cativantes de diversos gêneros, garantindo entretenimento sem fim.</p>
              </div>

            </div>
            <a href='/form-tv' className='col-lg-6 order-1 order-lg-2'>
              <div class="image ">
              </div>
            </a>

          </div>

        </div>
      </section>
    </>
  )
}