
import TopBar from '../../components/Clients/TopBar';
import HeroCliente from '../../components/Clients/HeroCliente';
import IconBoxes from '../../components/Clients/IconBoxes';
import Services from '../../components/Clients/Services';
import CtaPlanos from '../../components/Clients/CtaPlanos';
// import Pricing from '../../components/Clients/Pricing';
// import CarouselCanais from '../../components/Carousel/CarouselCanais';
import Novidades from '../../components/Clients/Novidades';
import FooterCliente from '../../components/Footer/FooterCliente';
import Header from '../../components/Header/Header';

export default function AreaCliente() {
    return (
        <>
            <div className='clients'>
                <TopBar />
                <Header/>
                <HeroCliente />
                <IconBoxes />
                <Services/>
                <CtaPlanos/>
                    <div className="section-title p-5">
                        <h2>EM BREVE NA NETSIM...</h2>
                        <p>Logo mais estará disponivel para todos os assinantes Netsim planos de TV de uma maneira revolucionaria no mercado. <br/><strong>Você poderá assistir os seus canais preferidos de onde estiver, precisando apenas de uma conexão com a internet! </strong></p>
                    </div>
                <Novidades/>
                {/* <CarouselCanais/> */}
                {/* <Pricing/> */}
                <FooterCliente/>
            </div>
        </>
    );
}