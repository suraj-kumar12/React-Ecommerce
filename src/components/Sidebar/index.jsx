import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Button } from "@mui/material";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);

  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="mb-3 text-[16px] font-[500] flex items-center pr-8">
          Shop By Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Elctronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bags"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Groceries"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jewellery"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box">
        <h3 className="mb-3 text-[16px] font-[500] flex items-center pr-8">
          Availity
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}
          >
            {isOpenAvailFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In Stock (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not Available (1)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="mb-3 text-[16px] font-[500] flex items-center pr-8">
          Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large (1)"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL (1)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-4">
        <h3 className="mb-3 text-[16px] font-[500] flex items-center pr-8">
          Filter By Price
        </h3>
        <RangeSlider />
        <div className="flex pt-4 pb-2 priceRange">
          <span className="text-[13px]">
            From: <strong className="text-dark">RS: {100}</strong>
          </span>
          <span className="ml-auto">
            From: <strong className="text-dark text-[13px]">RS: {5000}</strong>
          </span>
        </div>
      </div>

      <div className="box mt-4">
        <h3 className="mb-3 text-[16px] font-[500] flex items-center pr-8">
          Filter By Rating
        </h3>
        <div className="w-full">
          <Rating
            name="half-rating"
            defaultValue={5}
            precision={0.5}
            readOnly
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Rating
            name="half-rating"
            defaultValue={5}
            precision={0.5}
            readOnly
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Rating
            name="half-rating"
            defaultValue={4}
            precision={0.5}
            readOnly
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Rating
            name="half-rating"
            defaultValue={3}
            precision={0.5}
            readOnly
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Rating
            name="half-rating"
            defaultValue={2}
            precision={0.5}
            readOnly
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Rating
            name="half-rating"
            defaultValue={1}
            precision={0.5}
            readOnly
            className="w-full"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
