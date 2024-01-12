import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper/modules";
import img1 from '../../assets/Tecchhero/t1.png'
import img2 from '../../assets/Tecchhero/t2.png'
import img3 from '../../assets/Tecchhero/t3.png'
import img4 from '../../assets/Tecchhero/t4.png'
import img5 from '../../assets/Tecchhero/t5.png'
import img6 from '../../assets/Tecchhero/t6.png'

const TechHero = () => {
  return (
    <div className="mt-12">
     <h1 className="text-2xl">Projects title: TechHero</h1>
     <h1>Features: This is an electronics brand-based e-commerce site. In the home page, clients can select products, and if they would like to see all the products of each brand at a glance, they can do so after logging in.</h1>
     <p>Skills: React.js, Express.js, Mongoose DB with backend folder structure, Tan stack Query, axios, Tailwindcss, daisyui, html </p>
     <p>Live link: https://horrible-tail.surge.sh/</p>
     <p>Server: https://github.com/Jillurcf/tech-hero-server</p>
     <p>Client: https://github.com/Jillurcf/tech-hero-client</p>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
      
        
      </Swiper>
    </div>
  );
};

export default TechHero;
