import React, { useContext, useState } from "react";
import OtpBox from "../../components/OtpBox";
import { Button } from "@mui/material";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const verify = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const navigate = useNavigate();
  const context = useContext(MyContext);

  const actionType = localStorage.getItem("actionType");
  const email = localStorage.getItem("userEmail");

  const verifyOtp = (e) => {
    e.preventDefault();

    // verify emaill............

    if (actionType === "register") {
      postData("/api/user/verifyEmail", {
        email: localStorage.getItem("userEmail"),
        otp: otp,
      }).then((res) => {
        console.log(res);

        if (res?.error === false) {
          context.openAlertBox("success", res?.message);
          localStorage.removeItem("userEmail");
          navigate("/login");
        } else {
          context.openAlertBox("error", res?.message);
        }
      });
    }

    if (actionType === "forgot-password") {
      // .....forgot password otp.........
      postData("/api/user/verify-Forgot-Password-Otp", {
        email: localStorage.getItem("userEmail"),
        otp: otp,
      }).then((res) => {
        console.log(res);

        if (res?.error === false) {
          context.openAlertBox("success", res?.message);
          navigate("/forgot-password");
        } else {
          context.openAlertBox("error", res?.message);
        }
      });
    }
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <div className="text-center flex items-center justify-center">
            <img src="/verify.png" alt="" width={80} />
          </div>
          <h3 className="text-center text-[18px] text-black mt-4 mb-1">
            Verify OTP
          </h3>

          <p className="text-center mb-5 mt-0">
            OTP send to
            <span className="text-primary-500 font-bold">{email}</span>
          </p>

          <form onSubmit={verifyOtp}>
            <OtpBox length={6} onChange={handleOtpChange} />

            <div className="flex items-center justify-center mt-5 px-3">
              <Button type="submit" className="w-full btn-org btn-lg">
                Verify OTP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default verify;
