import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import QtyBox from "../QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";

const ProductDetailsComponent = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <h1 className="text-[24px] font-[600] mb-2">
        Embellished Embroidered Saree
      </h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-400 text-[13px]">
          Brands:
          <span className="text-black font-[500] opacity-75">kasee</span>
        </span>
        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
        <span className="text-[13px] cursor-pointer">Review (5)</span>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <span className="oldPrice line-through text-gray-500 text-[20px]">
          $58.00
        </span>
        <span className="oldPrice text-primary-500 font-bold text-[20px]">
          $58.00
        </span>

        <span className="text-[14px]">
          Available In Stock:
          <span className="text-green-600 font-bold text-[14px]">
            147 Items
          </span>
        </span>
      </div>

      <p className="mt-3 pr-10 mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="flex items-center gap-3 py-4">
        <span className="text-[16px]">Size:</span>
        <div className="flex items-center gap-2">
          <Button
            className={`!min-w-[40px] height-[30px] !border-1 !border-[#000] ${
              productActionIndex === 0 ? "!bg-primary-500 !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(0)}
          >
            S
          </Button>
          <Button
            className={`!min-w-[40px] height-[30px] !border-1 !border-[#000] ${
              productActionIndex === 1 ? "!bg-primary-500 !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(1)}
          >
            M
          </Button>
          <Button
            className={`!min-w-[40px] height-[30px] !border-1 !border-[#000] ${
              productActionIndex === 2 ? "!bg-primary-500 !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(2)}
          >
            L
          </Button>
          <Button
            className={`!min-w-[40px] height-[30px] !border-1 !border-[#000] ${
              productActionIndex === 3 ? "!bg-primary-500 !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(3)}
          >
            XL
          </Button>
        </div>
      </div>

      <p className="text-[14px] mt-5 text-[#000]">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>

      <div className="flex items-center gap-4 py-4">
        <div className="qtyBoxWrapper w-[70px]">
          <QtyBox />
        </div>

        <Button className="btn-org flex gap-2">
          <MdOutlineShoppingCart className="text-[22px]" /> Add to Cart
        </Button>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <span className="flex items-center gap-2 text-[15px] font-[500] link cursor-pointer">
          <FaRegHeart />
          Add to Wishlist
        </span>

        <span className="flex items-center gap-2 text-[15px] font-[500] link cursor-pointer">
          <IoIosGitCompare />
          Add to Compare
        </span>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
