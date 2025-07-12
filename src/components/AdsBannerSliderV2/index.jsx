import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import banner1 from "../banner.webp";

import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";
import BannerBoxV2 from "../BannerBoxV2";

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
            <BannerBoxV2
              info="left"
              image={
                "	https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"
              }
            ></BannerBoxV2>
          </SwiperSlide>

          <SwiperSlide>
            <BannerBoxV2
              info="left"
              image={
                "	https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"
              }
            ></BannerBoxV2>
          </SwiperSlide>

          <SwiperSlide>
            <BannerBoxV2
              info="left"
              image={
                "	https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"
              }
            ></BannerBoxV2>
          </SwiperSlide>

          <SwiperSlide>
            <BannerBoxV2
              info="left"
              image={
                "	https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"
              }
            ></BannerBoxV2>
          </SwiperSlide>

          <SwiperSlide>
            <BannerBoxV2
              info="left"
              image={
                "	https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"
              }
            ></BannerBoxV2>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AdsBannerSlider;
