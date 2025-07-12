import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@mui/material";

const HomeSliderV2 = () => {
  return (
    <>
      <Swiper
        loop={true}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="/sample-1.jpg" />

            <div className="info absolute top-0 -right-[100%] w-[50%] h-[100%]  opacity-0  z-50 p-8 flex items-center flex-col justify-center transition-all ">
              <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 ">
                Big Saving Days Sale
              </h4>

              <h2 className="text-[35px] font-[700] w-full text-left relative -right-[100%] opacity-0 ">
                Women Solid Round Green T-Shirt
              </h2>

              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0">
                Starting At Only
                <span className="text-primary-500 text-[30px] font-[700]">
                  $99.00
                </span>
              </h3>

              <div className="w-full relative -bottom-[100%] opacity-0 btn_">
                <Button className="btn-org">Shop Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden">
            <img src="/sample-2.jpg" />

            <div className="info absolute top-0 -right-[100%] w-[50%] h-[100%] opacity-0 z-50 p-8 flex items-center flex-col justify-center transition-all ">
              <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
                Big Saving Days Sale
              </h4>

              <h2 className="text-[35px] font-[700] w-full text-left relative -right-[100%] opacity-0">
                Apple iPhone 13 128 GB, <br />
                Pink
              </h2>

              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0">
                Starting At Only
                <span className="text-primary-500 text-[30px] font-[700]">
                  ₹ 35,500.00
                </span>
              </h3>

              <div className="w-full relative -bottom-[100%] opacity-0 btn_">
                <Button className="btn-org">Shop Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSliderV2;
