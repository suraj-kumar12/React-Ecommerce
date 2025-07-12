import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";

const ForgotPassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  const histoty = useNavigate();
  const context = useContext(MyContext);

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">
            Forgot Password
          </h3>

          <form className="w-full mt-5">
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword ? "text" : "password"}
                id="password"
                name="email"
                label="New Password *"
                variant="outlined"
                className="w-full"
                // value={formFields.email}
                // onChange={(e) =>
                //   setFormField({ ...formFields, email: e.target.value })
                // }
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

            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword2 ? "text" : "password"}
                id="confirm_password"
                name="password"
                label="Confirm Password*"
                variant="outlined"
                className="w-full"
                // value={formFields.password}
                // onChange={(e) =>
                //   setFormField({ ...formFields, password: e.target.value })
                // }
              />

              <Button
                className="!absolute right-[10px] top-[10px] !text-black z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full"
                onClick={() => setIsShowPassword2(!isShowPassword2)}
              >
                {isShowPassword2 === true ? (
                  <IoEyeSharp className="text-[20px] opacity-75" />
                ) : (
                  <IoEyeOffSharp className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="flex items-center mt-3 mb-3">
              <Button className="btn-org btn-lg w-full">Change Password</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
