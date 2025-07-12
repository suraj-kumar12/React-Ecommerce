import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import { IoClose } from "react-icons/io5";
import { FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryCollaps = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innersubmenuIndex, setInnersubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else setSubmenuIndex(index);
  };

  const openInnerSubmenu = (index) => {
    if (innersubmenuIndex === index) {
      setInnersubmenuIndex(null);
    } else {
      setInnersubmenuIndex(index);
    }
  };
  return (
    <>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to={"/"} className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>

            {submenuIndex === 0 ? (
              <FaRegMinusSquare
                className="absolute right-4 top-[10px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute right-4 top-[10px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Appreal
                    </Button>
                  </Link>
                  {innersubmenuIndex === 0 ? (
                    <FaRegMinusSquare
                      className="absolute right-4 top-[10px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute right-4 top-[10px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innersubmenuIndex === 0 && (
                    <ul className="submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px] "
                        >
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px] "
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px] "
                        >
                          Leather Watch
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px] "
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to={"/"} className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Outerwear
              </Button>
            </Link>

            {submenuIndex === 1 ? (
              <FaRegMinusSquare
                className="absolute right-4 top-[10px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute right-4 top-[10px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Appreal
                    </Button>
                  </Link>
                  {innersubmenuIndex === 1 ? (
                    <FaRegMinusSquare
                      className="absolute right-4 top-[10px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute right-4 top-[10px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {innersubmenuIndex === 1 && (
                    <ul className="submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px] "
                        >
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px] "
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px] "
                        >
                          Leather Watch
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px] "
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryCollaps;
