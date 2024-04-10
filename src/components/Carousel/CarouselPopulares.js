import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './styles.css'



// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function CarouselPopulares() {

  return (
    <> 
        <Swiper

          slidesPerView={4}
          spaceBetween={10}

          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 50,
            },
          }}
          loop={true}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          data-aos="fade-left" data-aos-duration="800"
        >

          {[
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(1).jpeg',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(2).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(3).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(4).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(5).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(6).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(7).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(8).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(9).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(10).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(11).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(12).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(13).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(14).png',
           'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/%20(15).png',
        


          ].map((image) => (
            <SwiperSlide>
              <img className='w-100 comentarios'
                src={image.toLowerCase()} />
            </SwiperSlide>
          )

          )}
        </Swiper>

    </>
  )
}