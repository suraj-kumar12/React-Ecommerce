import React from "react";
import AccountSidebar from "../../components/AccountSidebar";
import { useContext } from "react";
import { MyContext } from "../../App";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { PhoneInput } from "react-international-phone";
import Select from "@mui/material/Select";
import { Button, MenuItem } from "@mui/material";
import { deleteData, fetchDataFromApi, postData } from "../../utils/api";
import { useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";

const label = { inputProps: { "aria-label": "Radio demo" } };
export const Address = () => {
  const context = useContext(MyContext);
  const [address, setAddress] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [status, setStatus] = useState(false);
  const [phone, setPhone] = useState("");
  const [formFields, setFormFields] = useState({
    address_line1: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    mobile: "",
    status: "",
    userId: context?.userData?._id,
  });

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClose = () => {
    setIsOpenModel(false);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);

    setFormFields((prev) => ({
      ...prev,
      status: event.target.value,
    }));
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFields.address_line1 === "") {
      context.openAlertBox("error", "Please enter Address Line 1");
      return false;
    }

    if (formFields.city === "") {
      context.openAlertBox("error", "Please enter your city name");
      return false;
    }

    if (formFields.state === "") {
      context.openAlertBox("error", "Please enter  your state");
      return false;
    }

    if (formFields.pincode === "") {
      context.openAlertBox("error", "Please enter  your pincode");
      return false;
    }

    if (formFields.country === "") {
      context.openAlertBox("error", "Please enter  your country");
      return false;
    }

    if (formFields.mobile === "") {
      context.openAlertBox(
        "error",
        "Please enter  your 10-digit mobile number"
      );
      return false;
    }

    // update user-Detail .................
    postData(`/api/address/add`, formFields, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        console.log(res);

        context.openAlertBox("success", res?.message);
        setIsOpenModel(false);

        if (context?.userData?._id) {
          fetchDataFromApi(
            `/api/address/get?userId=${context?.userData?._id}`
          ).then((res) => {
            setAddress(res.address);

            console.log(res);
          });
        }
      } else {
        context.openAlertBox("error", res?.message);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      if (context?.userData?._id) {
        fetchDataFromApi(
          `/api/address/get?userId=${context?.userData?._id}`
        ).then((res) => {
          setAddress(res.address);
        });
      }
    }
  }, [context?.userData]);

  useEffect(() => {
    if (context?.userData?._id) {
      setFormFields((prev) => ({
        ...prev,
        userId: context.userData._id,
      }));
    }
  }, [context?.userData]);

  const removeAddress = (id) => {
    deleteData(`/api/address/${id}`).then((res) => {
      console.log(res);
      context.openAlertBox("success", res?.message);
      if (context?.userData?._id) {
        fetchDataFromApi(
          `/api/address/get?userId=${context?.userData?._id}`
        ).then((res) => {
          setAddress(res.address);
          console.log(res);
        });
      }
    });
  };

  return (
    <>
      <section className="py-10 w-full">
        <div className="container flex gap-5">
          <div className="col1 w-[20%]">
            <AccountSidebar></AccountSidebar>
          </div>

          <div className="col2 w-[50%]">
            <div className="card bg-white p-5 shadow-md rounded-md mb-5">
              <div className="flex items-center pb-3">
                <h2 className="pb-0">Address</h2>
              </div>

              <div
                className="flex items-center justify-center hover:bg-[#e7f3f9] p-5 border border-dashed border-[rgba(0,0,0,0.2)] bg-[#f1f1f1]"
                onClick={() => setIsOpenModel(true)}
              >
                <span className="text-[14px] font-[500]">Add Address</span>
              </div>

              <br />
              <div className="flex gap-2 flex-col  mt-4">
                {address?.length > 0 ? (
                  address.map((address, index) => (
                    <label
                      key={index}
                      className="group addressBox w-full relative border border-dashed border-[rgba(0,0,0,0.2)] flex items-center justify-center bg-[#f1f1f1] p-3 rounded-md cursor-pointer"
                    >
                      <div className="mr-auto">
                        <Radio
                          {...label}
                          name="address"
                          value={
                            address?.address_line1 +
                            address?.city +
                            address?.pincode +
                            address?.state +
                            address?.country
                          }
                          checked={
                            selectedValue ===
                            address?.address_line1 +
                              " " +
                              address?.city +
                              " " +
                              address?.pincode +
                              " " +
                              address?.state +
                              " " +
                              address?.country
                          }
                          onChange={handleChange}
                        />

                        <span>
                          {address?.address_line1 +
                            " " +
                            address?.city +
                            " " +
                            address?.pincode +
                            " " +
                            address?.state +
                            " " +
                            address?.country}
                        </span>
                      </div>

                      <span
                        onClick={() => removeAddress(address?._id)}
                        className="hidden group-hover:flex ml-auto  items-center justify-center w-[30px] h-[30px] rounded-full bg-gray-400 text-white"
                      >
                        <MdDeleteOutline />
                      </span>
                    </label>
                  ))
                ) : (
                  <p>No address found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isOpenModel}>
        <DialogTitle>Add Address</DialogTitle>
        <form className="p-8 py-3 pb-5" onSubmit={handleSubmit}>
          <div className="flex items-center gap-5 pb-5">
            <div className="col w-[100%]">
              <TextField
                className="w-full"
                label="Address Line 1"
                variant="outlined"
                size="small"
                name="address_line1"
                value={formFields.address_line1}
                onChange={onChangeInput}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 pb-5">
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="City"
                variant="outlined"
                size="small"
                name="city"
                value={formFields.city}
                onChange={onChangeInput}
              />
            </div>

            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="State"
                variant="outlined"
                size="small"
                name="state"
                value={formFields.state}
                onChange={onChangeInput}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 pb-5">
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="pincode"
                variant="outlined"
                size="small"
                name="pincode"
                value={formFields.pincode}
                onChange={onChangeInput}
              />
            </div>

            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="Country"
                variant="outlined"
                size="small"
                name="country"
                value={formFields.country}
                onChange={onChangeInput}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 pb-5">
            <div className="col w-[50%]">
              <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={(phone) => {
                  setPhone(phone);
                  setFormFields(() => ({
                    ...formFields,
                    mobile: phone,
                  }));
                }}
              />
            </div>

            <div className="col w-[50%]">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={status}
                onChange={handleChangeStatus}
                size="small"
                className="w-full"
              >
                <MenuItem value={false}>False</MenuItem>
                <MenuItem value={true}>True</MenuItem>
              </Select>
            </div>
          </div>

          <div className="flex gap-5">
            <Button
              className="btn-org btn-lg w-full flex gap-2 items-center"
              type="submit"
            >
              Save
            </Button>

            <Button
              className="btn-org btn-lg btn-border w-full flex gap-2 items-center"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default Address;
