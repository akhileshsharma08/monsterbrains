import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Testimonials.css";
import { EffectCards } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="container-fluid overflow-hidden mx-auto py-10 bg-white text-gray-600">
      <div className="section h-96 flex justify-center items-center">
        <div className="w-1/2 text-6xl font-bold titles pl-8 text-center">
          <h1>
            What Our Client <br /> Says ?
          </h1>
        </div>
        <div className="w-1/2 ">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide className="mySwiperSlide text-center flex justify-center items-center flex-col">
              <p className="text-lg text-semibold">
                "Peer testimonial: A testimonial that depicts your client as
                someone comparable to your potential customer".
              </p>
              <h1 className="my-4 titles">Monster brains</h1>
            </SwiperSlide>
            <SwiperSlide className="mySwiperSlide text-center flex justify-center items-center flex-col">
              <p className="text-lg text-semibold">
                "Peer testimonial: A testimonial that depicts your client as
                someone comparable to your potential customer".
              </p>
              <h1 className="my-4 titles">Monster brains</h1>
            </SwiperSlide>
            <SwiperSlide className="mySwiperSlide text-center flex justify-center items-center flex-col">
              <p className="text-lg text-semibold">
                "Peer testimonial: A testimonial that depicts your client as
                someone comparable to your potential customer".
              </p>
              <h1 className="my-4 titles">Monster brains</h1>
            </SwiperSlide>
            <SwiperSlide className="mySwiperSlide text-center flex justify-center items-center flex-col">
              <p className="text-lg text-semibold">
                "Peer testimonial: A testimonial that depicts your client as
                someone comparable to your potential customer".
              </p>
              <h1 className="my-4 titles">Monster brains</h1>
            </SwiperSlide>
            <SwiperSlide className="mySwiperSlide text-center flex justify-center items-center flex-col">
              <p className="text-lg text-semibold">
                "Peer testimonial: A testimonial that depicts your client as
                someone comparable to your potential customer".
              </p>
              <h1 className="my-4 titles">Monster brains</h1>
            </SwiperSlide>
            <SwiperSlide className="mySwiperSlide text-center flex justify-center items-center flex-col">
              <p className="text-lg text-semibold">
                "Peer testimonial: A testimonial that depicts your client as
                someone comparable to your potential customer".
              </p>
              <h1 className="my-4 titles">Monster brains</h1>
            </SwiperSlide>
            <SwiperSlide className="mySwiperSlide text-center flex justify-center items-center flex-col">
              <p className="text-lg text-semibold">
                "Peer testimonial: A testimonial that depicts your client as
                someone comparable to your potential customer".
              </p>
              <h1 className="my-4 titles">Monster brains</h1>
            </SwiperSlide>
            <SwiperSlide className="mySwiperSlide text-center flex justify-center items-center flex-col">
              <p className="text-lg text-semibold">
                "Peer testimonial: A testimonial that depicts your client as
                someone comparable to your potential customer".
              </p>
              <h1 className="my-4 titles">Monster brains</h1>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
