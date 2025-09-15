import { Button, CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import AccountSidebar from "../../components/AccountSidebar";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { editData, postData } from "../../utils/api";
import { Collapse } from "react-collapse";
import "react-international-phone/style.css";
import { PhoneInput } from "react-international-phone";

const MyAccount = () => {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [userId, setUserId] = useState("");
  const [isChangePasswordFormShow, setIsChangePasswordFormShow] =
    useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [changePassword, setChangePassword] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const context = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accesstoken");
    console.log(token);
    if (token === null) {
      navigate("/login");
    } else {
      navigate("/my-account");
    }
  }, [context?.isLogin]);

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      setUserId(context?.userData?._id);
      setFormFields({
        name: context?.userData?.name,
        email: context?.userData?.email,
        mobile: context?.userData?.mobile,
      });
      const ph = `"${context?.userData?.mobile}"`;
      setPhone(ph);

      setChangePassword({
        email: context?.userData?.email,
      });
    }
  }, [context?.userData]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });

    setChangePassword(() => {
      return {
        ...changePassword,
        [name]: value,
      };
    });
  };

  const validValue = Object.values(formFields).every((el) => el);
  const validValue2 = Object.values(changePassword).every((el) => el);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFields.name === "") {
      context.openAlertBox("error", "Please enter full name");
      return false;
    }

    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter email id");
      return false;
    }

    if (formFields.mobile === "") {
      context.openAlertBox("error", "Please enter  mobile number");
      return false;
    }

    // update user-Detail .................
    editData(`/api/user/${userId}`, formFields, {
      withCredentials: true,
    }).then((res) => {
      if (res?.error !== true) {
        console.log(res);
        setIsLoading(false);
        context.openAlertBox("success", res?.data?.message);
      } else {
        context.openAlertBox("error", res?.data?.message);
        setIsLoading(false);
      }
    });
  };

  // changePassword  ............

  const handleSubmitChangePassword = (e) => {
    e.preventDefault();
    setIsLoading2(true);

    if (changePassword.oldPassword === "") {
      context.openAlertBox("error", "Please enter Old password");
      return false;
    }

    if (changePassword.newPassword === "") {
      context.openAlertBox("error", "Please enter New Password");
      return false;
    }

    if (changePassword.confirmPassword === "") {
      context.openAlertBox("error", "Please enter Confirm Password");
      return false;
    }

    if (changePassword.confirmPassword !== changePassword.newPassword) {
      context.openAlertBox("error", "Password and New Password not match");
      setIsLoading2(false);
      return false;
    }

    // update user-Detail .................
    postData(`/api/user/update-password`, changePassword, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        console.log(res);
        setIsLoading2(false);
        context.openAlertBox("success", res?.message);
      } else {
        // context.openAlertBox("error", res?.message);
        setIsLoading2(false);
        // context.openAlertBox("error", err?.message);
        context.openAlertBox("error", res?.message);
      }
    });
  };
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar></AccountSidebar>
        </div>

        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md mb-5">
            <div className="flex items-center pb-3">
              <h2 className="pb-0">My Profile</h2>
              <Button
                className="!ml-auto"
                onClick={() =>
                  setIsChangePasswordFormShow(!isChangePasswordFormShow)
                }
              >
                Change Password
              </Button>
            </div>

            <hr />

            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    type="text"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="name"
                    value={formFields.name}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>

                <div className="w-[50%]">
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="email"
                    value={formFields.email}
                    disabled={true}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="flex items-center mt-5">
                <div className="w-[49%]">
                  <PhoneInput
                    defaultCountry="in"
                    value={phone}
                    onChange={(phone) => {
                      setPhone(phone);
                      setFormFields((prev) => ({
                        ...prev,
                        mobile: phone,
                      }));
                    }}
                    disabled={isLoading === true ? true : false}
                  />
                </div>
              </div>
              <br />
              <div className="flex items-center gap-4">
                <Button
                  className="btn-org btn-sm w-[200px]"
                  type="submit"
                  disabled={!validValue}
                >
                  {isLoading === true ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    "Update Profile"
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* ...........Change Password ................  */}

          <Collapse isOpened={isChangePasswordFormShow}>
            <div className="card bg-white p-5 shadow-md rounded-md">
              <div className="flex items-center pb-3">
                <h2 className="pb-0">Change Password</h2>
              </div>
              <hr />

              <form className="mt-5" onSubmit={handleSubmitChangePassword}>
                <div className="flex items-center gap-5">
                  <div className="w-[50%]">
                    <TextField
                      label="Old Password"
                      type="password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      name="oldPassword"
                      value={changePassword.oldPassword || ""}
                      disabled={isLoading2 === true ? true : false}
                      onChange={onChangeInput}
                      autoComplete="new-password"
                    />
                  </div>

                  <div className="w-[50%]">
                    <TextField
                      label="New Password"
                      type="password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      name="newPassword"
                      value={changePassword.newPassword || ""}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <div className="w-[49%]">
                    <TextField
                      type="password"
                      label="Confirm Password"
                      variant="outlined"
                      autoComplete="off"
                      size="small"
                      className="w-full"
                      name="confirmPassword"
                      value={changePassword.confirmPassword || ""}
                      disabled={isLoading === true ? true : false}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <br />
                <div className="flex items-center gap-4">
                  <Button
                    className="btn-org btn-sm w-[250px]"
                    type="submit"
                    disabled={!validValue2}
                  >
                    {isLoading2 === true ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      "Change Password"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Collapse>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
