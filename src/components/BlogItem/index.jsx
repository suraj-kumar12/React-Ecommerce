import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg"
          alt="blog img"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        />
        <span className="flex items-center justify-center gap-1 absolute text-white bottom-[15px] right-[15px] bg-primary-500 p-1 rounded-md text-[12px] font-[500]">
          <IoTimeOutline className="text-[16px]" /> 5 April, 2023
        </span>
      </div>
      <div className="info py-4">
        <h2 className="text-[15px] font-[600] text-black">
          <Link to={"/"} className="link">
            sustainable living through cutting-edge prefabricated homes
          </Link>
        </h2>
        <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">
          Lorem ipsum dolor sit amet consectetur ab earum quis aperiam repellat
          tenetu......
        </p>
        <Link className="link font-[500] text-[14px] flex items-center gap-1">
          Read More <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
