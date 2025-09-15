import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { LuMapPinCheck } from "react-icons/lu";
import { IoBagRemoveOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { editData, uploadImage } from "../../utils/api";

const AccountSidebar = () => {
  const [previews, setPreviews] = useState([]);
  const [upLoading, setUpLoading] = useState(false);
  const context = useContext(MyContext);

  useEffect(() => {
    const userAvatar = [];
    if (
      context?.userData?.avatar !== "" &&
      context?.userData?.avatar !== undefined
    ) {
      userAvatar.push(context?.userData?.avatar);
      setPreviews(userAvatar);
    }
  }, [context?.userData]);

  let selectedImages = [];

  const onChangeFile = async (e, apiEndPoint) => {
    try {
      setPreviews([]);
      const files = e.target.files;
      setUpLoading(true);
      console.log(files);

      for (var i = 0; i < files.length; i++) {
        if (
          // validate...........
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/webp")
        ) {
          const file = files[i];
          selectedImages.push(file);
          const formData = new FormData();
          formData.append(`avatar`, file);

          const previewUrl = URL.createObjectURL(file);
          setPreviews((prev) => [...prev, previewUrl]);

          // api calling ..........
          uploadImage("/api/user/user-avatar", formData).then((res) => {
            setUpLoading(false);
            let avatar = [];
            avatar.push(res?.data?.avatar);
            setPreviews(avatar);
            console.log(res);
          });
        } else {
          context.openAlertBox(
            "error",
            "Pleage select a valid JPG,JPEG,WEBP or PNG image file."
          );
          setUpLoading(false);
          return false;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-white shadow-md sticky top-[10px]">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200">
          {upLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              {previews?.length > 0 ? (
                previews.map((img, index) => (
                  <img
                    src={img}
                    key={index}
                    className="w-full h-full object-cover"
                  />
                ))
              ) : (
                <img
                  src="/user img.png"
                  className="w-full h-full object-cover"
                />
              )}
            </>
          )}

          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
            <FaCloudUploadAlt className="text-[25px] text-[#fff] " />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
              accept="image/*"
              onChange={(e) => onChangeFile(e, "/api/user/user-avatar")}
              name="avatar"
            />
          </div>
        </div>

        <h3>{context?.userData?.name}</h3>
        <h6 className="text-[13px] font-[500]">{context?.userData?.email}</h6>
      </div>

      <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
        <li className="w-full">
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
            to="/address"
            className={({ isActive }) =>
              isActive ? "active w-full block" : "w-full block"
            }
          >
            <Button className="w-full !py-2 !rounded-none flex items-center !justify-start !text-left !px-5 gap-2 !text-[rgba(0,0,0,0.8)] !capitalize">
              <LuMapPinCheck className="text-[17px]" />
              Address
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
