import React, { useState } from "react";
import { Button } from "@mui/material";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(!isOpenCatPanel);
  };
  return (
    <>
      <nav>
        <div className="container flex items-center justify-end gap-5">
          <div className="col_1 w-[18%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <HiMenuAlt1 className="text-[18px]" />
              Shop By Categories
              <FaAngleDown className="text-[16px] ml-auto cursor-pointer" />
            </Button>
          </div>

          <div className="col_2 w-[64%]">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none">
                <Link to="/">
                  <Button className="!font-medium !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] capitalize !py-4">
                    Home
                  </Button>
                </Link>
              </li>

              <li className="list-none relative">
                <Link
                  to="/productlisting"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="!font-medium !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] capitalize !py-4">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-0 min-w-[200px] bg-white shadow-md opacity-0  transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>
                      </Link>
                      <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0  transition-all">
                        <ul>
                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none">
                                T-shirt
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none">
                                Jeans
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none">
                                Footwear
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none">
                                watch
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none">
                                Pents
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <Button className="!font-medium !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] capitalize !py-4">
                    Electronics
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <Button className="!font-medium !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] capitalize !py-4">
                    Bags
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <Button className="!font-medium !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] capitalize !py-4">
                    Footwear
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <Button className="!font-medium !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] capitalize !py-4">
                    Groceries
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <Button className="!font-medium !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] capitalize !py-4">
                    Beauty
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <Button className="!font-medium !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] capitalize !py-4">
                    Wellness
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <Button className="!font-medium !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] capitalize !py-4">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[18%]">
            <p className="text-[15px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <IoRocketOutline className="text-[16px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Category panel component */}

      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
