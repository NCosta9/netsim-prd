import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function BannerProspera() {

    return (
        <>
            <Swiper
                id="Desk"
                className='d-none d-lg-block'
                fade>
                    <SwiperSlide >
                        <img
                            className="w-100"
                            src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/prospera/NetSim-Prospera-desk.png?t=2024-06-01T13%3A45%3A57.949Z'
                        />

                    </SwiperSlide>
                   
            </Swiper>
            <Swiper
                id="Mobile"
                className='d-lg-none'>
               
                    <SwiperSlide interval={3000}>
                        <img
                            className="w-100"
                            src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/prospera/NetSim-Prospera-mobile.png?t=2024-06-01T13%3A46%3A54.515Z'
                        />
                    </SwiperSlide>
                  
            </Swiper>

        </>

    );
}
