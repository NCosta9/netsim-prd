import CarouselCanais from '../../components/Carousel/CarouselCanais'
import CarouselFilmes from '../../components/Carousel/NetsimPlay/Filmes/CarouselFilmes'
import Tvprecing from '../../components/TV/Features/Tvprecing'
import VantagensTV from '../../components/TV/VantagensTV'
import './Lancamento.css'
export default function NetsimPlay() {
    return (
        <>
            <section id='play'>
                <div className='logo'>
                    <img src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/logos/logoAzul?t=2024-02-14T19%3A06%3A17.892Z" />
                </div>
                <div class="container col-xxl-8 px-4 py-5">
                    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div class="title-img col-lg-6 order-2 order-lg-1">
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2">
                            <h1 class="display-5 fw-bold mb-3" data-aos="fade-right" data-aos-duration="200"><b className='text-light'>PROMOÇÃO</b> de Lançamento</h1>
                            <p class="lead text-light"  data-aos="fade-right" data-aos-duration="400"> Estamos empolgados em compartilhar uma notícia emocionante que a partir de <b>1 de MARÇO de 2024 </b> certamente transformará a sua experiência de entretenimento!</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" href='/form-tv' data-aos="zoom-in" data-aos-duration="600">Entrar na lista de espera</a>
                            </div>
                        </div>
                    </div>
                </div>
                <VantagensTV />
                <CarouselFilmes/>
                <div class="bg-transparent text-secondary px-4 py-5 text-center"  data-aos="fade-up" data-aos-duration="800">
                    <div class="py-5">
                        <h1 class="display-5 fs-1 fw-bold" data-aos="zoom-in" data-aos-duration="400"><b>QUANDO</b> quiser e <b>ONDE</b> estiver!</h1>
                        <div class="col-lg-6 mx-auto">
                            <p class="fs-5 mb-4 text-light">Apenas com um acesso a internet, agora você pode assistir seus canais de TV, e programas favoritos a qualquer momento no lugar onde estiver! Com o aplicativo baixado em seu celular, é apenas acessar e assistir!</p>
                            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <a class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" href='/form-tv' data-aos="zoom-in" data-aos-duration="600">Quero meu acesso!! </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Tvprecing/>
                <CarouselCanais />
                <div class="container my-5">
                    <div class="position-relative p-5 text-center text-muted bg-transparent border-dashed rounded-5" data-aos="fade-up" data-aos-duration="800">
                        <button type="button" class="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
                        <h1 class="text-body-emphasis">Teste Grátis</h1>
                        <p class="col-lg-6 mx-auto mb-4 text-light fs-5">
                            A partir de <b>1 de MARÇO de 2024</b> vamos liberar 1 semana de teste grátis apenas para quem estiver dentro da lista de espera.
                            Garanta sua vaga e não perca essa oportunidade!
                        </p>
                        <a class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"  href="/form-tv"  data-aos="zoom-in" data-aos-duration="600"> Entrar na lista de espera agora </a>
                    </div>
                </div>
            </section>
        </>
    )
}