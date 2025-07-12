import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";

const ProductsSlider = (props) => {
  return (
    <>
      <div className="ProductsSlider py-4">
        <Swiper
          slidesPerView={props.item}
          spaceBetween={10}
          modules={[Navigation]}
          className="mySwiper"
          navigation={true}
        >
          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ProductsSlider;
