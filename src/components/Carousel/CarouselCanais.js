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

export default function CarouselCanais() {

  return (
    <>
      <div id='canais'>
        <Swiper

          slidesPerView={3}
          spaceBetween={10}

          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          loop={true}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="swiper-canais"
          data-aos="fade-left" data-aos-duration="800"
        >

          {[
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(1).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(2).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(3).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(4).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(5).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(6).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(7).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(8).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(9).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(10).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(11).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(12).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(13).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(14).png',
            'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(15).png',


          ].map((image) => (
            <SwiperSlide>
              <img className='w-100 mt-4 item-canais'
                src={image.toLowerCase()} />
            </SwiperSlide>
          )

          )}
        </Swiper>
      </div>


    </>
  )
}