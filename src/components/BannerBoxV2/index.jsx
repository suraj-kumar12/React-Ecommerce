import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const BannerBoxV2 = (props) => {
  return (
    <div className="bannerV2 w-full overflow-hidden rounded-md group relative">
      <img
        src={props.image}
        alt=""
        className="w-full transition-all
        duration-150
        group-hover:scale-105"
      />

      <div
        className={`info absolute top-0 w-[70%] h-[100%] z-50 p-5 flex items-center justify-center flex-col gap-2 ${
          props.info === "left" ? "left-0" : "right-0"
        }
        ${props.info === "right" ? "" : "pl - 15"}
`}
      >
        <h2 className="text-[18px] font-[500] w-full">Buy Apple Iphone</h2>
        <span className="text-[25px] text-primary-500 w-full font-[600]">
          ₹45000
        </span>

        <div className="w-full">
          <Link to="/" className="text-[16px] font-[600] link">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;
