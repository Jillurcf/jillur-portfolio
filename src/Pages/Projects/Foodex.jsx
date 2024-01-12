import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper/modules";
import img1 from '../../assets/foodex/f1.png'
import img2 from '../../assets/foodex/f1-1.png'
import img3 from '../../assets/foodex/f2.png'
import img4 from '../../assets/foodex/f3.png'

const Foodex = () => {
  return (
    <div className="mt-24">
     <h1 className="text-2xl">Projects title: FoodEX</h1>
     <h1>Features: This is restaurant management project. Viewers can view food, order food items, and see their ordered details. This project has an authentication policy. And we used a JSON web token for user validation.</h1>
     <p>Skills: React.js, Express.js, Mongoose DB with backend folder structure, Tan stack Query, axios, Tailwindcss, daisyui, html </p>
     <p>Live link: https://assignment11-5c40c.web.app</p>
     <p>Server: https://github.com/Jillurcf/foodex-server</p>
     <p>Client: https://github.com/Jillurcf/foodex-client</p>
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
        
        
      </Swiper>
    </div>
  );
};

export default Foodex;
