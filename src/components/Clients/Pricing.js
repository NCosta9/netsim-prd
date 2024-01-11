export default function Pricing() {
    return (
        <>
            <section id="pricing" className="pricing">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Netsim Play - TV </h2>
                        <p>
                            O aplicativo revolucionário que redefinirá a forma como você assiste a televisão, filmes e séries. 😎<br/>
                            <b>Você pode assitir agora seus canais de tv, e programas favoritos 
                            QUANDO quiser e ONDE estiver!!</b>
                        </p>
                    </div>

                    <div className="row justify-content-center">



                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                            <div className="box">
                                <span className="promo text-center">Black Friday</span>
                                <span className="advanced">Popular</span>
                                <h3>TV FULL</h3>
                                <p className="text-start my-0 text-muted ms-4"> <sup>De</sup></p>

                                <h4 className="my-0"><sup>R$</sup><i className="text-decoration-line-through">29,90</i><span> / mês</span></h4>
                                <p className="text-start my-0 text-muted ms-4"> <sup>Por apenas</sup></p>
                                <h4 className="my-0"><sup>R$</sup>14,90<span> / mês</span></h4>

                                <ul>
                                    <li>Canais TV</li>
                                    <li>Filmes</li>
                                    <li>Séries</li>
                                    <li>Canais Premium</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Adiquirir</a>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <div className="box">
                                <h3>TV LIGHT</h3>
                                <h4><sup>R$</sup>14,90<span> / mês</span></h4>
                                <ul>
                                    <li>Canais TV</li>
                                    <li className="no">Filmes</li>
                                    <li className="no">Séries</li>
                                    <li className="no">Canais Premium</li>
                                    <li className="no"><span>.</span></li>
                                    <li className="no"><span>.</span></li>

                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Adiquirir</a>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <p className="nota text-light">**Promoção valida apenas para clientes.</p>

            </section>
        </>
    )
}