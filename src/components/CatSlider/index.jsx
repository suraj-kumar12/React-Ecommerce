import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider">
      <div className="container py-6">
        {/* <h1>this is the CatSlider</h1> */}
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper"
          navigation={true}
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col shadow-2xl">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item  py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="/Beauty.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item  py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="/Electronics.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item  py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="/Footwear.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Footwear</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item  py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="/Groceries.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Groceries</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item  py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="/Wellness.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Wellness</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item  py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="/Bags.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Bags</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item  py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col shadow-lg">
                <img
                  src="/Jewellery.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Jewellery</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
