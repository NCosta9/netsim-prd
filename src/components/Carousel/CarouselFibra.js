import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';

export default function CarouselFibra() {

    return (
        <>
            <Swiper
                className='d-none d-lg-block' fade>
                    <SwiperSlide >
                        <img
                            className="w-100"
                            src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/desk/BannerDesktopFibra.jpg'
                        />

                    </SwiperSlide>
                   
            </Swiper>
            <Swiper
                className='d-lg-none'>
               
                    <SwiperSlide interval={3000}>
                        <img
                            className="w-100"
                            src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/mobile/BannerMobileFibra.jpg?t=2024-04-03T20%3A20%3A02.613Z'
                        />
                    </SwiperSlide>
                  
            </Swiper>

        </>

    );
}
