import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";
import "../Navigation/style.css";
import CategoryCollaps from "../../CategoryCollaps";

const CategoryPanel = (props) => {
  const togglerDrawer = (newOpen) => {
    props.setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box
      className="categoryPanel"
      sx={{ width: 250 }}
      role="presentation"
      // onClick={() => props.openCategoryPanel(false)}
    >
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoClose
          onClick={() => props.openCategoryPanel(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <CategoryCollaps />
    </Box>
  );

  return (
    <div>
      <Drawer
        open={props.isOpenCatPanel}
        onClose={() => props.openCategoryPanel(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
