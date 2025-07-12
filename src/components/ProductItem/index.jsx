import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import "./style.css";
import { Button } from "@mui/material";
import { MyContext } from "../../App";

const ProductItem = () => {
  const context = useContext(MyContext);

  return (
    <div className="productItem rounded-md overflow-hidden border border-black/10 shadow-lg">
      <div className="group imgWrapper w-[100%] h-[250px] overflow-hidden rounded-md relative">
        <Link to={"/"}>
          <img
            src="https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp"
            alt=""
            className="w-full"
          />

          <img
            src="https://serviceapi.spicezgold.com/download/1742462552741_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp"
            alt=""
            className="w-full transition-all duration-700 group-hover:scale-105 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
          />
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary-500 text-white rounded-lg p-1 text-[12px] font-[500]">
          10%
        </span>

        <div className="actions absolute z-50 flex items-center opacity-0 group-hover:opacity-100 top-[-200px] right-[-40px] flex-col gap-4 w-[150px] transition-all duration-300 group-hover:top-[15px]">
          <Tooltip title="Add" placement="left-end">
            <Button
              className="!w-[35px] !h-[35px] !min-w-[35px] !bg-white text-white !rounded-full overflow-hidden hover:!bg-primary-500 hover:!text-white group"
              onClick={() => context.setOpenProductDetailsModal(true)}
            >
              <MdZoomOutMap className="text-[18px] text-black hover:text-white transition-colors" />
            </Button>
          </Tooltip>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-white text-white !rounded-full overflow-hidden hover:!bg-primary-500 hover:!text-white group">
            <IoIosGitCompare className="text-[18px] text-black hover:text-white transition-colors" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-white text-white !rounded-full overflow-hidden hover:!bg-primary-500 hover:!text-white group">
            <FaRegHeart className="text-[18px] text-black hover:text-white transition-colors" />
          </Button>
        </div>
      </div>

      <div className="info p-3 bg-[#f1f1f1] py-5">
        <h6 className="text-[13px] !font-[400]">
          <Link to={"/"} className="link transition-all">
            all about us
          </Link>
        </h6>
        <h3 className="text-[14px] title mt-1 font-[500] text-[rgba(0,0,0,0.9)] mb-1">
          <Link to={"/"} className="link transition-all">
            Embroidered Satin Saree...
          </Link>
        </h3>
        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500">$58.00</span>
          <span className="oldPrice text-primary-500 font-bold">$58.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
