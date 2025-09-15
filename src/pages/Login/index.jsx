import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { Button, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";
import { postData } from "../../utils/api.js";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormField] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const context = useContext(MyContext);

  // forgot password...........

  const forgotPassword = () => {
    if (formFields.email === "") {
      context.openAlertBox("error", "please enter email Id");
      return false;
    } else {
      context.openAlertBox("success", `OTP send to ${formFields.email}`);
      localStorage.setItem("userEmail", formFields.email);
      localStorage.setItem("actionType", "forgot-password");

      // forgotPassword............
      postData("/api/user/forgot-password", {
        email: formFields.email,
      }).then((res) => {
        if (res?.error === false) {
          context.openAlertBox("success", res?.message);
          navigate("/verify");
        } else {
          context.openAlertBox("error", res?.message);
        }
      });
    }
  };

  // change input >>>>>>>>>

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormField(() => {
      return { ...formFields, [name]: value };
    });
  };

  const validValue = Object.values(formFields).every((el) => el);

  // login>>>>>>>>>>>>>>>>>>>>>>
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // validation for login...
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter email id");
      setIsLoading(false);
      return;
    }

    if (formFields.password === "") {
      context.openAlertBox("error", "Please enter password");
      setIsLoading(false);
      return;
    }

    // api call for login ........
    postData("/api/user/login", formFields, { withCredentials: true }).then(
      (res) => {
        console.log(res);
        if (res?.error !== true) {
          setIsLoading(false);
          context.openAlertBox("success", res?.message);

          setFormField({
            email: "",
            password: "",
          });

          localStorage.setItem("accesstoken", res?.data?.accesstoken);
          localStorage.setItem("refreshtoken", res?.data?.refreshtoken);
          context.setIsLogin(true);

          navigate("/");
        }
      }
    );
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">
            Login to your Account
          </h3>

          <form className="w-full mt-5" onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                name="email"
                value={formFields.email}
                disabled={isLoading === true ? true : false}
                label="Email Id *"
                variant="outlined"
                className="w-full"
                onChange={onChangeInput}
              />
            </div>

            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword ? "text" : "password"}
                id="password"
                name="password"
                label="Password *"
                variant="outlined"
                className="w-full"
                value={formFields.password}
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

            <a
              className="link cursor-pointer text-[14px] font-[600]"
              onClick={forgotPassword}
            >
              Forgot Password ?
            </a>

            <div className="flex items-center w-full mt-3 mb-3">
              <Button
                type="submit"
                disabled={!validValue}
                className="btn-org btn-lg w-full flex gap-3"
              >
                {isLoading === true ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Login"
                )}
              </Button>
            </div>

            <p className="text-center">
              Not Register?
              <Link
                className="link text-[14px] font-[600] text-primary-500 pl-1"
                to={"/register"}
              >
                Sign Up
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

export default Login;
