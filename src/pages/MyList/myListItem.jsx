import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
// import { GoTriangleDown } from "react-icons/go";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { Button, Rating } from "@mui/material";

const MyListItem = (props) => {
  return (
    <>
      <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
        <div className="img w-[15%] rounded-md overflow-hidden">
          <Link to={"/productDetails/7845"} className="group">
            <img
              src="https://serviceapi.spicezgold.com/download/1742446102502_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-3-202402141853.jpg"
              alt=""
              className="w-full group-hover:scale-105 transition-all"
            />
          </Link>
        </div>

        <div className="info w-[85%] relative">
          <IoMdClose className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />

          <span className="text-[13px]">Sangria</span>
          <h3 className="text-[15px]">
            <Link className="link">A-Line Kurti With Sharara and Dupatta</Link>
          </h3>

          <Rating name="size-small" defaultValue={4} size="small" readOnly />

          {/* <div className="flex items-center gap-4 mt-2">
            <div className="relative">
              <span
                className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer"
                onClick={handleClickSize}
              >
                Size: {selectedSize}
                <GoTriangleDown />
              </span>

              <Menu
                id="size-menu"
                anchorEl={sizeAnchorEl}
                open={openSize}
                onClose={() => handleCloseSize(null)}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
                <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
                <MenuItem onClick={() => handleCloseSize("XL")}>L</MenuItem>
                <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
                <MenuItem onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
              </Menu>
            </div>

            <div className="relative">
              <span
                className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer"
                onClick={handleClickQty}
              >
                Qty: {selectedQty}
                <GoTriangleDown />
              </span>

              <Menu
                id="size-menu"
                anchorEl={qtyAnchorEl}
                open={openQty}
                onClose={() => handleCloseQty(null)}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
                <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
                <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
                <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
                <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
              </Menu>
            </div>
          </div> */}

          <div className="flex items-center gap-4 mt-2 mb-2">
            <span className="oldPrice text-black font-bold text-[14px]">
              $58.00
            </span>
            <span className="oldPrice line-through text-gray-500 text-[14px] font-bold">
              $58.00
            </span>

            <span className="oldPrice text-primary-500 font-bold text-[14px]">
              55% off
            </span>
          </div>

          <Button className="btn-org btn-sm">Add to Cart</Button>
        </div>
      </div>
    </>
  );
};

export default MyListItem;
