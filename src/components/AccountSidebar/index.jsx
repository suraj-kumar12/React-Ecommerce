import { Button } from "@mui/material";
import React from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const AccountSidebar = () => {
  return (
    <div className="card bg-white shadow-md sticky top-[10px]">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
          <img
            src="https://i.pinimg.com/originals/89/2f/45/892f454c33cfba40ee2078cde1faf2a6.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
            <FaCloudUploadAlt className="text-[25px] text-[#fff] " />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
          </div>
        </div>

        <h3>Abcd</h3>
        <h6 className="text-[13px] font-[500]">abc@gmail.com</h6>
      </div>

      <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
        <li className="w-full">
          {/* <NavLink
                  to="/my-account"
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !py-2 !rounded-none flex items-center !justify-start !text-left !px-5 gap-2 !text-[rgba(0,0,0,0.8)] !capitalize">
                    <CiUser className="text-[17px]" />
                    My Profile
                  </Button>
                </NavLink> */}
          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              isActive ? "active w-full block" : "w-full block"
            }
          >
            <Button className="w-full !py-2 !rounded-none flex items-center !justify-start !text-left !px-5 gap-2 !text-[rgba(0,0,0,0.8)] !capitalize">
              <CiUser className="text-[17px]" />
              My Profile
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              isActive ? "active w-full block" : "w-full block"
            }
          >
            <Button className="w-full !py-2 !rounded-none flex items-center !justify-start !text-left !px-5 gap-2 !text-[rgba(0,0,0,0.8)] !capitalize">
              <CiHeart className="text-[17px]" />
              My List
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              isActive ? "active w-full block" : "w-full block"
            }
          >
            <Button className="w-full !py-2 !rounded-none flex items-center !justify-start !text-left !px-5 gap-2 !text-[rgba(0,0,0,0.8)] !capitalize">
              <IoBagRemoveOutline className="text-[17px]" />
              My Orders
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              isActive ? "active w-full block" : "w-full block"
            }
          >
            <Button className="w-full !py-2 !rounded-none flex items-center !justify-start !text-left !px-5 gap-2 !text-[rgba(0,0,0,0.8)] !capitalize">
              <IoIosLogOut className="text-[17px]" />
              Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
