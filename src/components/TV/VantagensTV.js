import './styleService.css'
export default function VantagensTV() {
    return (
        <>
            <section id="tv" className="tv" data-aos="fade-up">



                <div className="container">

                    <div className="section-title">
                        <h4 className='fs-2 text-light'>Apresentamos a você,  o Netsim<b>Play</b>... </h4>
                        <span className="linha"></span>
                        <p className='text-light fs-4'>O aplicativo revolucionário que redefinirá a forma como você assiste a televisão, filmes e séries.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="icon-box" data-aos="zoom-in" data-aos-duration="400">
                                <div className="icon"><i className="bi bi-house"></i></div>
                                <h4><a href="">Variedade de Canais</a></h4>
                                <p className="text-light">Contamos com mais de 104 canais de TV para você maratonar no seu dia de descanso, e com os melhores canais!</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex ">
                            <div className="icon-box" data-aos="zoom-in" data-aos-duration="500">
                                <div className="icon"><i className="bi bi-star"></i></div>
                                <h4><a href="">Variedade de Filmes</a></h4>
                                <p className="text-light">Além dos canais de TV ainda ficará disponível uma gama completa de filmes, melhorando ainda mais o seu dia de diversão para Família.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex ">
                            <div className="icon-box" data-aos="zoom-in" data-aos-duration="600">
                                <div className="icon"><i className="bi bi-shield"></i></div>
                                <h4><a href="">Qualidade Garantida</a></h4>
                                <p className="text-light"> Todos os nossos canais são licenciados, e ainda com uma interface de usuário amigável e rápida que você não vai se decepcionar.  </p>
                            </div>
                        </div>

                    </div>

                    <hr className='divider-orange' />
                    


                </div>
            </section>
        </>
    )
}
