import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';



import './stylesFilmes.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function CarouselFilmes() {
 
  
  return (
    <>
      <div id='filmes'>
        <div className="bg-transparent text-secondary py-5 text-center" data-aos="fade-up" data-aos-duration="800">
          <div className="py-5">
            <img className='mb-5' src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/logos/netsim-play/Logotipo-sombreada.png?t=2024-04-26T12%3A16%3A55.325Z' width="150px"/>
            <h1 className="titulo display-5 fs-1 fw-bold" data-aos="zoom-in" data-aos-duration="400">TENHA MUITO CONTEÚDO E MAIS ECONOMIA.</h1>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5 mb-4 text-light px-4">
                + de 120 canais ao vivo, conteúdos on demand, grandes sucessos da TV
                e do cinema e muito mais pra você curtir.
              </p>

            </div>

            <div className="row categorias flex-md-row position-relative">
              <div id="" className="col  align-items-center text-light d-flex flex-column position-static">
                <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-width="1.5" d="M22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16v-4c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12z" /><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9 2l3 3.5L15 2m1 4v16" /><path fill="currentColor" d="M20 16a1 1 0 1 0-2 0a1 1 0 0 0 2 0m0-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0" /></g></svg>
                <div className="card-body">
                  <a className='link-reset' href='https://ixc.netsimtelecom.com.br/central_assinante_web/login d-flex flex-column position-static'>
                    <h5 className="card-text fs-6">
                      Canais da TV aberta
                    </h5>
                  </a>
                </div>
              </div>
              <div id="" className="col align-items-center text-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M0 3h24v15h-4.046l2.698 2.063l-1.215 1.589L16.66 18H7.336l-4.771 3.652l-1.216-1.588L4.044 18H0zm2 2v11h20V5z" /></svg>            <div className="card-body">
                  <a className='link-reset' href='https://ixc.netsimtelecom.com.br/central_assinante_web/login d-flex flex-column position-static'>
                    <h5 className="card-text fs-6">Canais da TV por assinatura </h5>
                  </a>

                </div>
              </div>
              <div id="" className="col align-items-center text-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 16 16"><path fill="currentColor" d="M0 2v12h16V2zm3 11H1v-2h2zm0-4H1V7h2zm0-4H1V3h2zm9 8H4V3h8zm3 0h-2v-2h2zm0-4h-2V7h2zm0-4h-2V3h2zM6 5v6l4-3z" /></svg>           <div className="card-body">
                  <a className='link-reset' href='https://ixc.netsimtelecom.com.br/central_assinante_web/login d-flex flex-column position-static'>
                    <h5 className="card-text fs-6">
                      VOD Filmes e series
                    </h5>
                  </a>

                </div>
              </div>

            </div>
          </div>
        </div>

        <Swiper

          slidesPerView={1}
          spaceBetween={10}

          breakpoints={{

            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
          }}
          loop={true}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="Swiper-Filmes"
          data-aos="fade-left" data-aos-duration="800"
        >

          <SwiperSlide>
            <div className='item-filme-1'>
              <div class=" position-absolute bottom-0 start-0">
                <img class="logo-filme mb-2" src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(14).png" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item-filme-2'>
              <div class=" position-absolute bottom-0 start-0">
                <img class="logo-filme mb-2" src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(7).png" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item-filme-3'>
              <div class=" position-absolute bottom-0 start-0">
                <img class="logo-filme mb-2" src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(9).png" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item-filme-4'>
              <div class=" position-absolute bottom-0 start-0">
                <img class="logo-filme mb-2" src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(10).png" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item-filme-5'>
              <div class=" position-absolute bottom-0 start-0">
                <img class="logo-filme mb-3" src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(1).png" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item-filme-6'>
              <div class=" position-absolute bottom-0 start-0">
                <img class="logo-filme mb-3" src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/netsimplay/populares/(3).png" />
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>

    </>
  )
}