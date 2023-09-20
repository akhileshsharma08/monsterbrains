import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Teams.css'

import img1 from "../img/teams/myimg.png";
const Teams = () => {
  return (
    <div className=" bg-slate-950 py-8">
      <h1 className="text-center my-8 text-white text-8xl font-semibold titles">Meet With Our Team</h1>
      <div className="container mx-auto px-4 py-4  ">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
          <SwiperSlide className="border border-white" >
            <img src={img1} alt="slide_image" className="rounded-xl"  width={420} height={400} />
            <p className="text-zinc-600 text-center">akhilesh</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="slide_image" width={420} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="slide_image" width={420} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="slide_image" width={420} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="slide_image" width={420} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="slide_image" width={420} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="slide_image" width={420} height={400} />
          </SwiperSlide>

          <div className="slider-controler py-4 ">
            <div className="swiper-button-prev slider-arrow left-4">
              <ion-icon name="arrow-back-outline "></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination  "></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Teams;
