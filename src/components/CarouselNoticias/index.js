import Carousel from 'react-bootstrap/Carousel';

function CarouselNoticias() {
    return (
        <Carousel>
            <Carousel.Item  interval={5000}>
                <h2 class="blog-post-title mb-1">Novos parceiros de descontos</h2>
                <p class="blog-post-meta">07- Dezembro- 2022 </p>

                <p>
                    Conseguimos novas parcerias com estabelecimentos para garantir mais desconto para os nossos cliente em sua região. Baixe agora o aplicativo. E basta entrar em contato com o nosso suporte para liberarmos o seu acesso.
                </p>
                <a href="#">clique aqui...</a>
               
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <h2 class="blog-post-title mb-1">Migração Radio para Fibra</h2>
                <p class="blog-post-meta">07- Dezembro- 2022</p>

                <p>
                    Estamos passando a fibra em alguns bairros e realizando a migração do nossos clientes via radio para fibra otica sem custos adicionais. Para cosultar se ja tem e possibilidade para você, basta apenas entrar em contato com nosso suporte. 
                </p>
                <a href="#">Clique aqui...</a>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <h2 class="blog-post-title mb-1">Copa do Mundo </h2>
                <p class="blog-post-meta">01- Dezembro- 2022</p>
                <p>
                    Durante os jogos do Brasil na copa do mundo 
                    nossa empresa não estara realizando 
                    atendimento ao cliente.
                </p>
                <a href="#">Clique aqui...</a>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselNoticias;