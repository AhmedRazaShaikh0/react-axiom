import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import '../components/Swiper.css'

import {AiTwotoneStar} from 'react-icons/ai'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <div className=" bg-slate-700 px-5">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{clickable:true,bulletActiveClass	:"swiper-pagination-bullet-active",bulletClass:"swiper-pagination-bullet"}}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        <SwiperSlide>
          <div className=" flex mx-auto space-x-1"><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo repellat, officiis</h1>
          <div className=" w-14 mx-auto"><img src="/img.avif" alt="" className=" rounded-full" /></div>
          <h1 className=" text-lg font-bold">Ahmed Raza</h1>
          <h1>Karachi</h1>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex mx-auto space-x-1"><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo repellat, officiis</h1>
          <div className=" w-14 mx-auto"><img src="/img.avif" alt="" className=" rounded-full" /></div>
          <h1 className=" text-lg font-bold">Ahmed Raza</h1>
          <h1>Karachi</h1>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex mx-auto space-x-1"><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo repellat, officiis</h1>
          <div className=" w-14 mx-auto"><img src="/img.avif" alt="" className=" rounded-full" /></div>
          <h1 className=" text-lg font-bold">Ahmed Raza</h1>
          <h1>Karachi</h1>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex mx-auto space-x-1"><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo repellat, officiis</h1>
          <div className=" w-14 mx-auto"><img src="/img.avif" alt="" className=" rounded-full" /></div>
          <h1 className=" text-lg font-bold">Ahmed Raza</h1>
          <h1>Karachi</h1>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex mx-auto space-x-1"><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo repellat, officiis</h1>
          <div className=" w-14 mx-auto"><img src="/img.avif" alt="" className=" rounded-full" /></div>
          <h1 className=" text-lg font-bold">Ahmed Raza</h1>
          <h1>Karachi</h1>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
