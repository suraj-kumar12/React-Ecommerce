import React, { useState } from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/CatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import AdsBannerSliderV2 from "../../components/AdsBannerSliderV2";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsSlider from "../../components/ProductsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";
import HomeSliderV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider></HomeSlider>

      <section className="py-6">
        <div className="container flex gap-5">
          <div className="part1 w-[70%]">
            <HomeSliderV2></HomeSliderV2>
          </div>

          <div className="part2 w-[30%] flex items-center justify-between flex-col">
            <BannerBoxV2
              info="left"
              image={
                "	https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"
              }
            ></BannerBoxV2>
            <BannerBoxV2
              info="right"
              image={
                "	https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"
              }
            ></BannerBoxV2>
          </div>
        </div>
      </section>

      <HomeCatSlider />

      <section className="bg-white py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March.
              </p>
            </div>

            <div className="rightSec">
              <Box
                sx={{
                  maxWidth: { xs: 3200, sm: 780 },
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Fashion" />
                  <Tab label="Beauty" />
                  <Tab label="Smart Tablet" />
                  <Tab label="Footwear" />
                  <Tab label="Groceries" />
                  <Tab label="Wellness" />
                  <Tab label="Bags" />
                  <Tab label="Jewellery" />
                </Tabs>
              </Box>
            </div>
          </div>

          <ProductsSlider item={5}></ProductsSlider>
        </div>
      </section>

      <section className="py-4 pt-2 bg-white">
        <div className="container">
          <div className="freshShiping w-[80%] m-auto p-4 border-2 border-[red] flex items-center justify-between rounded-md mb-4">
            <div className="col1 flex items-center gap-4">
              <TbTruckDelivery className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now on your First Order and over $200
              </p>
            </div>
            <div className="col3 font-bold text-[25px]">-Only $200*</div>
          </div>
          <AdsBannerSliderV2 items={4} />
        </div>
      </section>

      <section className="py-5 pt-5 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider item={6}></ProductsSlider>
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-5 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
          <ProductsSlider item={6}></ProductsSlider>
        </div>
      </section>

      <section className="py-5 pb-8 pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation]}
            className="blogSlider"
            navigation={true}
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;
