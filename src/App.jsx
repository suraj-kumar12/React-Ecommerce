import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./components/ProductZoom";
import { IoClose, IoCloseOutline } from "react-icons/io5";
import ProductDetailsComponent from "./components/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CartPage from "./pages/Cart";
import Verify from "./pages/Verify";
import toast, { Toaster } from "react-hot-toast";
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import MyList from "./pages/MyList";
import Orders from "./pages/Orders";
import { fetchDataFromApi } from "./utils/api";
import { Address } from "./pages/MyAccount/address";

const MyContext = createContext();

const App = () => {
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [openProductDetailsModal, setOpenProductDetailsModal] =
    React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleClickOpenProductDetailsModal = () => {
    setOpenProductDetailsModal(true);
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("accesstoken");

    if (token !== null && token !== undefined && token !== "") {
      // setIsLogin(true);

      fetchDataFromApi("/api/user/user-details").then((res) => {
        setIsLogin(true);
        setUserData(res.data);
        if (res?.response?.data?.error === true) {
          if (res?.response?.data?.message === "you have not login") {
            localStorage.removeItem("accesstoken");
            localStorage.removeItem("refreshtoken");
            openAlertBox("error", "Your session is closed please login again");
            setIsLogin(false);
            window.location.href = "/login";
          }
        }
      });
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
    setUserData,
    userData,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header></Header>
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path="/productlisting"
              exact={true}
              element={<ProductListing />}
            ></Route>
            <Route
              path={"/productDetails/:id"}
              exact={true}
              element={<ProductDetails />}
            ></Route>

            <Route path="/login" exact={true} element={<Login />}></Route>
            <Route path="/register" exact={true} element={<Register />}></Route>
            <Route path="/cart" exact={true} element={<CartPage />}></Route>
            <Route path="/verify" exact={true} element={<Verify />}></Route>
            <Route path="/checkout" exact={true} element={<Checkout />}></Route>
            <Route path="/my-list" exact={true} element={<MyList />}></Route>
            <Route path="/my-orders" exact={true} element={<Orders />}></Route>
            <Route path="/address" exact={true} element={<Address />}></Route>
            <Route
              path="/my-account"
              exact={true}
              element={<MyAccount />}
            ></Route>
            <Route
              path="/forgot-password"
              exact={true}
              element={<ForgotPassword />}
            ></Route>
          </Routes>
          <Footer></Footer>
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModal}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[0px] right-[0px] !bg-[#f1f1f1]"
              // onClick={(handleCloseProductDetailsModal, setOpenCartPanel)}
              onClick={() => {
                handleCloseProductDetailsModal();
                setOpenCartPanel(false); // यहां false कर रहे हो ताकि cart panel भी बंद हो
              }}
            >
              <IoCloseOutline className="text-[20px]" />
            </Button>
            <div className="col1 w-[40%]">
              <ProductZoom />
            </div>

            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default App;

export { MyContext };
