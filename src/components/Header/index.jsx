import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare, IoIosLogOut } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { Button } from "@mui/material";
import { FaRegCircleUser } from "react-icons/fa6";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoBagRemoveOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const context = useContext(MyContext);

  return (
    <header>
      <div className="top-strip py-2 border-t-[1px] border-gray-300 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] link transition"
                  >
                    Help Center
                  </Link>
                </li>

                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[13px] link transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b-[1px] border-gray-300">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="/logo.jpg" alt="" />
            </Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>
          <div className="col3 w-[35%] flex items-center pl-7">
            <ul className="flex items-center justify-end w-full gap-3">
              {context.isLogin === false ? (
                <li className="list-none">
                  <Link
                    to="/login"
                    className="link transition text-[15px] font-[500]"
                  >
                    Login
                  </Link>
                  &nbsp; /&nbsp;
                  <Link
                    to="/register"
                    className="link transition text-[15px] font-[500]"
                  >
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <li className="list-none">
                    <div className="myAccountWrap flex items-center gap-3">
                      <Button
                        className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#ccc] !p-0 !overflow-visible relative"
                        onClick={handleClick}
                      >
                        <FaRegCircleUser className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                      </Button>
                      <div className="info flex flex-col">
                        <h4 className="text-[14px] !capitalize font-[500] mb-0 text-left justify-start text-[rgba(0,0,0,0.6)] leading-3">
                          Suraj Roman
                        </h4>
                        <span className="text-[13px]  capitalize font-[400] mb-0 text-left justify-start text-[rgba(0,0,0,0.6)]">
                          surajroman2588@gmail.com
                        </span>
                      </div>
                    </div>
                  </li>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "left", vertical: "top" }}
                    anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                  >
                    <Link to={"/my-account"} className="w-full">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <FaRegCircleUser className="text-[18px]" />
                        <span className="text-[14px]">My Account</span>
                      </MenuItem>
                    </Link>

                    <Link to={"/my-orders"} className="w-full">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <IoBagRemoveOutline className="text-[18px]" />
                        <span className="text-[14px]">Orders</span>
                      </MenuItem>
                    </Link>

                    <Link to={"/my-list"} className="w-full">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <CiHeart className="text-[18px]" />
                        <span className="text-[14px]">My List</span>
                      </MenuItem>
                    </Link>
                    <Link to={"/login"} className="w-full">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <IoIosLogOut className="text-[18px]" />
                        <span className="text-[14px]">Logout</span>
                      </MenuItem>
                    </Link>
                  </Menu>
                </>
              )}

              <li>
                <Tooltip title="Compare" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoIosGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Cart" placement="top">
                  <IconButton
                    aria-label="cart"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Wishlist" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
