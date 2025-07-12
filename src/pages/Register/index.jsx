import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Drawer from "@mui/material/Drawer";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">
            Register for new account
          </h3>

          <form className="w-full mt-5">
            <div className="form-group w-full mb-5">
              <TextField
                type="name"
                id="name"
                label="Full Name *"
                variant="outlined"
                className="w-full"
              />
            </div>

            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                label="Email Id *"
                variant="outlined"
                className="w-full"
              />
            </div>

            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword ? "text" : "password"}
                id="password"
                label="Password *"
                variant="outlined"
                className="w-full"
              />
              <Button
                className="!absolute right-[10px] top-[10px] !text-black z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === true ? (
                  <IoEyeSharp className="text-[20px] opacity-75" />
                ) : (
                  <IoEyeOffSharp className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="flex items-center mt-3 mb-3">
              <Button className="btn-org btn-lg w-full"> Register </Button>
            </div>

            <p className="text-center">
              Already have an account?
              <Link
                className="link text-[14px] font-[600] text-primary-500 pl-1"
                to={"/login"}
              >
                Login
              </Link>
            </p>

            <p className="text-center">Or Continue with social media</p>

            <Button className="flex gap-2 items-center w-full !bg-[#f1f1f1] btn-lg !text-black">
              <FcGoogle className="text-[20px]" />
              Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
