import React, { useState } from "react";
import AccountSidebar from "../../components/AccountSidebar";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Button } from "@mui/material";
import Badge from "../../components/Badge";

const Orders = () => {
  const [isOpenOrderProduct, setIsOpenProduct] = useState(null);

  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenProduct(null);
    } else {
      setIsOpenProduct(index);
    }
  };

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar></AccountSidebar>
        </div>

        <div className="col2 w-[70%]">
          <div className="shadow-md rounded-md p-5 bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My List</h2>
              <p className="mt-0">
                There are <span className="text-primary-500 font-bold">2</span>{" "}
                order
              </p>

              <div class="relative overflow-x-auto mt-5">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        &nbsp;
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Order Id
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Paymant Id
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Phone Number
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Address
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Pincode
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Total Amount
                      </th>

                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Email
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        User Id
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Order Status
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderProduct(0)}
                        >
                          {isOpenOrderProduct === 0 ? (
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500">23435565677775</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500 block w-[200px] ">
                          abcd asd sadkjfkaj sasdfa dkjfakkj
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500">
                          <Badge status="pending" />
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500">abcd</span>
                      </td>
                    </tr>

                    {isOpenOrderProduct === 0 && (
                      <tr>
                        <td className="pl-23" colSpan={6}>
                          <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Id
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Subtotal
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                  <td className="px-6 py-4 font-[500]">
                                    213234465578fsfh
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary-500">
                                      New Modal Saree
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <img
                                      src="https://serviceapi.spicezgold.com/download/1742462552741_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp"
                                      alt=""
                                      className="!w-[80px] !h-[80px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary-500 font-500">
                                      2
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary-500">
                                      2000
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary-500 block w-[200px] ">
                                      4000
                                    </span>
                                  </td>
                                </tr>

                                <tr>
                                  <td
                                    className="bg-[#f1f1f1]"
                                    colSpan={12}
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderProduct(1)}
                        >
                          {isOpenOrderProduct === 1 ? (
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-gray-600">23435565677775</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-gray-600">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-gray-600">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-gray-600">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-gray-600 block w-[200px] ">
                          abcd asd sadkjfkaj sasdfa dkjfakkj
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-gray-600">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-gray-600">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-gray-600">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-gray-600">abcd</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500">
                          <Badge status="pending" />
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary-500">abcd</span>
                      </td>
                    </tr>

                    {isOpenOrderProduct === 1 && (
                      <tr>
                        <td className="pl-23" colSpan={6}>
                          <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Id
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Subtotal
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                  <td className="px-6 py-4 font-[500]">
                                    213234465578fsfh
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary-500">
                                      New Modal Saree
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <img
                                      src="https://serviceapi.spicezgold.com/download/1742462552741_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp"
                                      alt=""
                                      className="!w-[80px] !h-[80px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary-500 font-500">
                                      2
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary-500">
                                      2000
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary-500 block w-[200px] ">
                                      4000
                                    </span>
                                  </td>
                                </tr>

                                <tr>
                                  <td
                                    className="bg-[#f1f1f1]"
                                    colSpan={12}
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
