import Carousel from 'react-bootstrap/Carousel';

export default function CarouselBanner() {

    return (
        <>
            <Carousel className='d-none d-lg-block' fade>
                {[
                    'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/banner-01.png',
                    'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/banner-02.png',
                    'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/banner-03.png',
                    'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/banner-04.png',
                    'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/banner-05.png',

                ].map((descktop) => (
                    <Carousel.Item interval={3000}>
                        <img
                            className="w-100"
                            src={descktop.toLowerCase()}
                        />

                    </Carousel.Item>
                ))}

            </Carousel>
            <Carousel className='d-lg-none'>
                {[
                    'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/mobile/mobile-01',
                    'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/mobile/mobile-02',
                    'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/mobile/mobile-03',


                ].map((mobile) => (
                    <Carousel.Item interval={3000}>
                        <img
                            className="w-100"
                            src={mobile.toLowerCase()}
                        />

                    </Carousel.Item>
                ))}
            </Carousel>

        </>

    );
}
