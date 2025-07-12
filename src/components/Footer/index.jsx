import { Button } from "@mui/material";
import React, { useContext } from "react";
import { BiSupport } from "react-icons/bi";
import { CiChat1, CiInstagram, CiYoutube } from "react-icons/ci";
import { LiaGiftSolid, LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnBold } from "react-icons/pi";
import { RiWalletLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaPinterestP } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { Drawer } from "@mui/material";
import CartPanel from "../CartPanel";
import { MyContext } from "../../App";
import { IoClose } from "react-icons/io5";
// import CartPanel from "./components/CartPanel";

const Footer = () => {
  const context = useContext(MyContext);
  return (
    <>
      <footer className="py-6  bg-[#fafafa]">
        <div className="container">
          <div className="flex items-center justify-center gap-5 py-8 pb-8">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary-500 group-hover:-translate-y-2" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[13px] font-[500]">For all Orders Over $100</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <PiKeyReturnBold className="text-[40px] transition-all duration-300 group-hover:text-primary-500 group-hover:-translate-y-2" />
              <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
              <p className="text-[13px] font-[500]">For an Exchange Product</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <RiWalletLine className="text-[40px] group-hover:text-primary-500 transition-all duration-300 group-hover:-translate-y-2" />
              <h3 className="text-[16px] font-[600] mt-3 ">Secured Payment</h3>
              <p className="text-[13px] font-[500]">Payment Cards Accepted</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-primary-500 group-hover:-translate-y-2" />
              <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
              <p className="text-[13px] font-[500]">Our First Product Order</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary-500 group-hover:-translate-y-2" />
              <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
              <p className="text-[13px] font-[500]">Contact us Anytime</p>
            </div>
          </div>

          <hr />

          <div className="footer flex py-12">
            <div className="part1 w-[25%] border-r border-[#ff5252]">
              <h2 className="text-[18px] font-[600] mb-4">Contact Us</h2>
              <p className="text-[14px] font-[400] mb-4">
                Classyshop - Mega Super Store <br /> 507-Union Trade Centre
                France
              </p>
              <Link
                className="link text-[13px]"
                to={"mailto:someone@example.com"}
              >
                sales@yourcompany.com
              </Link>
              <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary-500">
                (+91) 8340-770-571
              </span>

              <div className="flex items-center gap-5">
                <CiChat1 className="text-[40px] text-primary-500" />
                <span className="text-[16px] font-[600]">
                  Online Chat <br /> Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[40%] flex pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to={"/"} className="link">
                      Prices drop
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to={"/"} className="link">
                      New products
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to={"/"} className="link">
                      Best sales
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to={"/"} className="link">
                      Contact us
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to={"/"} className="link">
                      Sitemap
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to={"/"} className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Our company</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to={"/"} className="link">
                      Delivery
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to={"/"} className="link">
                      Legal Notice
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to={"/"} className="link">
                      Terms and conditions of use
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to={"/"} className="link">
                      Contact us
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to={"/"} className="link">
                      About us
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to={"/"} className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part3 w-[35%] flex flex-col pl-8 pr-8">
              <h2 className="text-[18px] font-[600] mb-4">
                Subscribe to newsletter
              </h2>

              <p className="text-[13px]">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>

              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border border-gray-300 outline-none focus:border-gray-500  pl-4 pr-4 rounded-sm mb-4"
                  placeholder="your email address"
                />
                <Button className="btn-org">SUBSCRIBE</Button>

                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white">
        <div className="containe flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary-500 transition-all"
              >
                <GrFacebookOption className="text-[20px] group-hover:text-white" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary-500 transition-all"
              >
                <CiYoutube className="text-[20px] group-hover:text-white" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary-500 transition-all"
              >
                <FaPinterestP className="text-[20px] group-hover:text-white" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary-500 transition-all"
              >
                <CiInstagram className="text-[20px] group-hover:text-white" />
              </Link>
            </li>
          </ul>

          <p className="text-[13px]">© 2024 - Ecommerce Template</p>

          <div className="flex items-center gap-2">
            <img src="/carte_bleue.png" alt="" />
            <img src="/visa.png" alt="" />
            <img src="/paypal.png" alt="" />
            <img src="/master_card.png" alt="" />
            <img src="american_express.png" alt="" />
          </div>
        </div>
      </div>

      {/* cart..... panel */}
      <Drawer
        open={context.openCartPanel}
        onClose={context.toggleCartPanel(false)}
        anchor="right"
        className="cartPanel"
      >
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)]">
          <h4> Shopping Cart (1)</h4>
          <IoClose
            className="text-[20px] cursor-pointer"
            onClick={context.toggleCartPanel(false)}
          />
        </div>

        <CartPanel />
      </Drawer>
    </>
  );
};

export default Footer;
