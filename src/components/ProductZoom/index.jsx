import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={0}
            modules={[Navigation]}
            className="zoomProductSliderThumbs h-[500px] overflow-hidden"
            navigation={true}
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 0 ? "opacity-100" : "opacity-30"
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1742462485033_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 1 ? "opacity-100" : "opacity-30"
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1742462485037_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-2-202304220521.webp"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 2 ? "opacity-100" : "opacity-30"
                }`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1742462485045_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
          <Swiper
            // direction={"vertical"}
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://serviceapi.spicezgold.com/download/1742462485033_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://serviceapi.spicezgold.com/download/1742462485037_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-2-202304220521.webp"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://serviceapi.spicezgold.com/download/1742462485045_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
