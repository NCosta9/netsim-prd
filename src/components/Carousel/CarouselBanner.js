import Carousel from 'react-bootstrap/Carousel';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function CarouselBanner() {

    return (
        <>
            <Swiper
                navigation={true}
                pagination={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className='d-none d-lg-block' fade>
                    <SwiperSlide >
                        <img
                            className="w-100"
                            src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/desk/desk-banner-netsim-home.jpg?t=2024-04-26T12%3A00%3A39.892Z'
                        />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img
                            className="w-100"
                            src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/desk/ClubeNetsimFull.jpeg'
                        />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img
                            className="w-100"
                            src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/desk/MaxFull.jpeg'
                        />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img
                            className="w-100"
                            src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/desk/NetsimPlay.jpeg'
                        />

                    </SwiperSlide>
            </Swiper>
            <Swiper
                navigation={true}
                pagination={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className='d-lg-none'>
               
                    <SwiperSlide interval={3000}>
                        <img
                            className="w-100"
                            src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/mobile/mobile-banner-netsim-home-450.jpg?t=2024-04-26T12%3A03%3A25.566Z'
                        />
                    </SwiperSlide>
                    <SwiperSlide interval={3000}>
                        <img
                            className="w-100"
                            src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/mobile/ClubeNetsimMobile.jpg'
                        />
                    </SwiperSlide>
                    <SwiperSlide interval={3000}>
                        <img
                            className="w-100"
                            src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/mobile/HBOMaxMobile.jpg'
                        />
                    </SwiperSlide>
                    <SwiperSlide interval={3000}>
                        <img
                            className="w-100"
                            src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/banners/mobile/mobile-04'
                        />
                    </SwiperSlide>
            </Swiper>

        </>

    );
}
