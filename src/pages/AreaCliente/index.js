
import TopBar from '../../components/Clients/TopBar';
import HeroCliente from '../../components/Clients/HeroCliente';
import IconBoxes from '../../components/Clients/IconBoxes';
import Services from '../../components/Clients/Services';
import CtaPlanos from '../../components/Clients/CtaPlanos';
// import Pricing from '../../components/Clients/Pricing';
// import CarouselCanais from '../../components/Carousel/CarouselCanais';
import FooterCliente from '../../components/Footer/FooterCliente';
import Header from '../../components/Header/Header';
import BannerProspera from '../../components/Banners/BannerProspera';

export default function AreaCliente() {
    return (
        <>
            <div className='clients'>
                <TopBar />
                <Header/>
                <HeroCliente />
                <IconBoxes />
                <BannerProspera/>
                <Services/>
                <CtaPlanos/>
               
                {/* <CarouselCanais/> */}
                {/* <Pricing/> */}
                <FooterCliente/>
            </div>
        </>
    );
}