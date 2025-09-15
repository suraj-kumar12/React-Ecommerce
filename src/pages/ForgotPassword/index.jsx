import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { Button, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { MyContext } from "../../App";
import { postData } from "../../utils/api";
// import { postData } from "../../utils/api";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);
  const [formFields, setFormField] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const context = useContext(MyContext);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormField(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const validValue = Object.values(formFields).every((el) => el);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(false);

    if (formFields.newPassword === "") {
      context.openAlertBox("error", "Please enter New Password");
      isLoading(false);
      return false;
    }

    if (formFields.confirmPassword === "") {
      context.openAlertBox("error", "Confirm Password");
      setIsLoading(false);
      return false;
    }

    if (formFields.newPassword !== formFields.confirmPassword) {
      context.openAlertBox(
        "error",
        "New Password and Confirm Password does not match"
      );
      setIsLoading(false);
      return false;
    }

    postData("/api/user/reset-password", formFields).then((res) => {
      console.log(res);
      if (res?.error === false) {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("actionType");
        context.openAlertBox("success", res?.message);
        setIsLoading(false);
        navigate("/login");
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">
            Forgot Password
          </h3>

          <form className="w-full mt-5" onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword ? "text" : "password"}
                id="password"
                name="newPassword"
                label="New Password *"
                variant="outlined"
                className="w-full"
                value={formFields.newPassword}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
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
                name="confirmPassword"
                value={formFields.confirmPassword}
                disabled={isLoading === true ? true : false}
                label="Confirm Password*"
                variant="outlined"
                className="w-full"
                onChange={onChangeInput}
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

            <div className="flex items-center w-full mt-3 mb-3">
              <Button
                type="submit"
                disabled={!validValue}
                className="btn-org btn-lg w-full flex gap-3"
              >
                {isLoading === true ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Change Password"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
