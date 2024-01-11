export default function HeroCliente() {
    return (
        <>

            <section id="hero" class="d-flex justify-cntent-center align-items-center ">
                <div id="heroCarousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">

                   {/*  <!-- Slide 1 --> */}
                    <div class="carousel-item active">
                        <div class="carousel-container">
                            <h2 class="animate__animated animate__fadeInDown">Clube de Descontos</h2>
                            <p class="animate__animated animate__fadeInUp">Você cliente da Netsim tem desconto em mais de 3.000 lojas espalhadas pelo Brasil, incluindo em Aguas quentes- DF</p>
                            <a href="https://app.netsimtelecom.com.br/" class="btn-get-started animate__animated animate__fadeInUp scrollto">Adquirir Agora</a>
                        </div>
                    </div>

                    {/* <!-- Slide 2 --> */}
                    <div class="carousel-item">
                        <div class="carousel-container">
                            <h2 class="animate__animated animate__fadeInDown">Baixe o app central do cliente</h2>
                            <p class="animate__animated animate__fadeInUp">
                                Acompanhamento de faturas, download de faturas, pagamento de fatura via pix copia e cola. 
                            </p>
                            <a href="https://qrco.de/bcWAGR" class="btn-get-started animate__animated animate__fadeInUp scrollto">Baixar Agora</a>
                        </div>
                    </div>

                    {/* <!-- Slide 3 --> */}
                    <div class="carousel-item">
                        <div class="carousel-container">
                            <h2 class="animate__animated animate__fadeInDown">Netsim Play TV</h2>
                            <p class="animate__animated animate__fadeInUp">
                                Assista a filmes series e muito mais com o Netsim Play, <b> CANAIS DE TV</b>, com ampla variedades
de programas e conteúdo ao vivo, 24 horas por dia, 7 dias por semana.podem ser acessados a
qualquer hora e qualquer lugar que tenha serviço de internet. Os filmes,
séries, documentários, desenhos e outros gêneros que o usuário pode
escolher conforme seu gosto pessoal
                            </p>
                            <a href="https://play.netsimtelecom.com.br/" class="btn-get-started animate__animated animate__fadeInUp scrollto">Adquirir Agora</a>
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                    </a>

                </div>
            </section>
        </>
    )
}