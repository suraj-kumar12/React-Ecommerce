import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div
      className={`box bannerBox overflow-hidden rounded-lg group ${
        props.className || ""
      }`}
    >
      <Link to={"/"}>
        <img
          src={props.img}
          alt="banner"
          className="w-full h-[300px] object-cover transition-all duration-300 group-hover:scale-105"
        />
      </Link>
    </div>
  );
};

export default BannerBox;
