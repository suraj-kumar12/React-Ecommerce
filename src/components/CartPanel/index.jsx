import { Button } from "@mui/material";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to={"/productDetails/45875"} className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                alt=""
                className="w-full group-hover:scale-105 transition-all"
              />
            </Link>
          </div>

          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to={"/productDetails/5485"} className="link transition-all">
                Floral Beads and Stones Pure Chiffon Saree
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span>
                Qty: <span>2</span>
              </span>
              <span className="text-primary-500 font-bold">Price: $25</span>
            </p>

            <MdDeleteOutline className="absolute top-[10px] right-[10px] text-[20px] link transition-all" />
          </div>
        </div>

        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to={"/productDetails/45875"} className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                alt=""
                className="w-full group-hover:scale-105 transition-all"
              />
            </Link>
          </div>

          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to={"/productDetails/5485"} className="link transition-all">
                Floral Beads and Stones Pure Chiffon Saree
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span>
                Qty: <span>2</span>
              </span>
              <span className="text-primary-500 font-bold">Price: $25</span>
            </p>

            <MdDeleteOutline className="absolute top-[10px] right-[10px] text-[20px] link transition-all" />
          </div>
        </div>

        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to={"/productDetails/45875"} className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                alt=""
                className="w-full group-hover:scale-105 transition-all"
              />
            </Link>
          </div>

          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to={"/productDetails/5485"} className="link transition-all">
                Floral Beads and Stones Pure Chiffon Saree
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span>
                Qty: <span>2</span>
              </span>
              <span className="text-primary-500 font-bold">Price: $25</span>
            </p>

            <MdDeleteOutline className="absolute top-[10px] right-[10px] text-[20px] link transition-all" />
          </div>
        </div>

        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to={"/productDetails/45875"} className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                alt=""
                className="w-full group-hover:scale-105 transition-all"
              />
            </Link>
          </div>

          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to={"/productDetails/5485"} className="link transition-all">
                Floral Beads and Stones Pure Chiffon Saree
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span>
                Qty: <span>2</span>
              </span>
              <span className="text-primary-500 font-bold">Price: $25</span>
            </p>

            <MdDeleteOutline className="absolute top-[10px] right-[10px] text-[20px] link transition-all" />
          </div>
        </div>

        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to={"/productDetails/45875"} className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                alt=""
                className="w-full group-hover:scale-105 transition-all"
              />
            </Link>
          </div>

          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to={"/productDetails/5485"} className="link transition-all">
                Floral Beads and Stones Pure Chiffon Saree
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span>
                Qty: <span>2</span>
              </span>
              <span className="text-primary-500 font-bold">Price: $25</span>
            </p>

            <MdDeleteOutline className="absolute top-[10px] right-[10px] text-[20px] link transition-all" />
          </div>
        </div>
      </div>
      <br />

      <div className="bottomsec absolute bottom-[10px] w-full pr-5 left-[10px]">
        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex justify-between items-center flex-col">
          <div className="w-full flex justify-between items-center">
            <span className="text-[14px] font-[600]">1 Item</span>
            <span className="text-primary-500 font-bold">$86.00</span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="text-[14px] font-[600]">Shipping</span>
            <span className="text-primary-500 font-bold">$8.00</span>
          </div>
        </div>

        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex justify-between items-center flex-col">
          <div className="w-full flex justify-between items-center">
            <span className="text-[14px] font-[600]">Total (tax excl.)</span>
            <span className="text-primary-500 font-bold">$93.00</span>
          </div>

          <br />

          <div className="flex items-center justify-between w-full gap-5">
            <Link to={"/cart"} className="w-[50%] d-block">
              <Button className="btn-org btn-lg w-full">View Cart</Button>
            </Link>
            <Link to={"/checkout"} className="w-[50%] d-block">
              <Button className="btn-org btn-border btn-lg w-full">
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
