// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';


export default function CarouselCanais() {
    return (
        <>
            <section id="canais" class="canais">
                <div class="container" data-aos="zoom-in">
                    <div class="g">

                    <Swiper
                        preventInteractionOnTransition={true}
                        speed={1000}
                        autoplay={{ delay: 500 }}
                        autoplayTimeLeft={'timeleft'}
                        loop={true}
                        slidesPerView={5}
                        spaceBetween={50}
                        modules={[FreeMode, Pagination, Autoplay]}
                        className="swiper-wrapper align-items-center"
                    >
                    {[
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/agro',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/arte',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/bandnews',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/bandsports',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/cnnbrasil',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/dcpc',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/europa',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/fueltv',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/gazeta',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/htfilmes',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/jpnews',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/record',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/recordnews',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/redetv',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/sabor&arte',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/sbt',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/sportstvplus',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/terraviva',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/trace',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/viajar',
                        'https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/canais-tv/zoomoo',
                        




                      
                    ].map((descktop) => (
                        <SwiperSlide>
                            <img
                                className="img-fluid"
                                src={descktop.toLowerCase()}
                            />

                        </SwiperSlide>
                    ))}

                   
                            </Swiper>
                    </div>

                        </div>
                    </section >

                </>
                )
}