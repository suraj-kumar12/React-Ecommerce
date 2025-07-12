import React, { useState } from "react";
import OtpBox from "../../components/OtpBox";
import { Button } from "@mui/material";

const verify = () => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verityOtp = (e) => {
    e.preventDefault();
    alert(otp);
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
            <span className="text-primary-500 font-bold">suraj@gmail.com</span>
          </p>

          <form onSubmit={verityOtp}>
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
