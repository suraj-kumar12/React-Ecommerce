import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import banner1 from "../banner.webp";

import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <>
      <div className="pt-5 pb-0 w-full">
        <Swiper
          slidesPerView={props.items}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper"
          navigation={true}
        >
          <SwiperSlide>
            <BannerBox img={"/banner1.webp"}></BannerBox>
          </SwiperSlide>

          <SwiperSlide>
            <BannerBox img="/banner2.webp" className="max-w-full" />
          </SwiperSlide>

          <SwiperSlide>
            <BannerBox img={"/banner3.webp"}></BannerBox>
          </SwiperSlide>

          <SwiperSlide>
            <BannerBox img={"/banner4.webp"}></BannerBox>
          </SwiperSlide>

          <SwiperSlide>
            <BannerBox img={"/banner1.webp"}></BannerBox>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AdsBannerSlider;
