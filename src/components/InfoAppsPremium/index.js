import premium1 from '../Playhub/img/premium1.png';
import premium2 from '../Playhub/img/premium2.png';
import premium3 from '../Playhub/img/premium3.png';
import premium4 from '../Playhub/img/premium4.png';



export default function InfoAppsPremium() {
    return (
        <>
            <div class="container text-start">
                <div class="row">
                    {/* Ritual fit */}
                    <div class="col">
                            <img src={premium1} class="mt-3" alt="..." height="80" width="80"/>
                                <div class="card-body">
                                    <h5 class="card-title my-2 fw-normal">Ritual fit</h5>
                                    <p class="card-text mb-0 text-muted">O aplicativo de treinamento pessoal para pessoas fitness.</p>
                                    <a href="https://playhub.movidesk.com/kb/article/275117/ritual-fit" class="link-orange">Como ativar</a>
                                </div>
                    </div>
                     {/* Doutorpass */}
                    <div class="col">
                            <img src={premium2} class="mt-3" alt="..." height="80" width="80"/>
                                <div class="card-body">
                                    <h5 class="card-title my-2 fw-normal">Doutorpass</h5>
                                    <p class="card-text mb-0 text-muted">O Doutorpass é uma plataforma de acesso a diversos benefícios em Saúde, como orientação médica via telemedicina.</p>
                                    <a href="https://playhub.movidesk.com/kb/article/275068/doutorpass#" class="link-orange">Como ativar</a>
                                </div>
                    </div>
                    
                </div>
                <div class="row">
                    {/* Sexy hot */}
                    <div class="col">
                            <img src={premium3} class="mt-3" alt="..." height="80" width="80"/>
                                <div class="card-body">
                                    <h5 class="card-title my-2 fw-normal">Sexy Hot</h5>
                                    <p class="card-text mb-0 text-muted">A marca traz o melhor do universo do conteúdo adulto para quem busca prazer seguro e de qualidade. Com um acervo inovador, te convidamos a viver uma experiência única e livre de julgamentos.</p>
                                    <a href="https://playhub.movidesk.com/kb/article/275118/sexy-hot" class="link-orange">Como ativar</a>
                                </div>
                    </div>
                     {/* HBO max */}
                    <div class="col">
                            <img src={premium4} class="mt-3" alt="..." height="80" width="80"/>
                                <div class="card-body">
                                    <h5 class="card-title my-2 fw-normal">HBO Max</h5>
                                    <p class="card-text mb-0 text-muted">A HBO Max traz diversão para a família toda com filmes, séries e muito mais.</p>
                                    <a href="https://playhub.movidesk.com/kb/article/279765/hbo-max" class="link-orange">Como ativar</a>
                                </div>
                    </div>
                </div>
            </div>
        </>
    );
}
