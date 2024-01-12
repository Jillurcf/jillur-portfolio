import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper/modules";
import img1 from '../../assets/letsgo/l1.png'
import img2 from '../../assets/letsgo/l2.png'
import img3 from '../../assets/letsgo/l3.png'
import img4 from '../../assets/letsgo/l4.png'
import img5 from '../../assets/letsgo/l5.png'
import img6 from '../../assets/letsgo/l6.png'
import img7 from '../../assets/letsgo/l7.png'
import { motion, useScroll } from "framer-motion";
const LetsGo = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="my-12">
     <h1 className="text-2xl">Projects title: LetsGo</h1>
     <h1>Features: This is a content-based website. Here, a user can visit, see contest details, and participate in the contest. The user can see their activities on the dashboard. Also, the admin can see, approve, update, and delete contests. He can decide which contest creator can create the contest.</h1>
     <p>Skills: React.js, Express.js, Mongoose DB with backend folder structure, Tan stack Query, axios, Tailwindcss, daisyui, html </p>
     <p>Live link: https://assignment12-473b3.web.app</p>
     <p>Server: https://github.com/Jillurcf/lets-go-server</p>
     <p>Client: https://github.com/Jillurcf/lets-go-client</p>
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
        <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default LetsGo;
