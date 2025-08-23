import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import { Button, Rating, TextField } from "@mui/material";
import QtyBox from "../../components/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import ProductsSlider from "../../components/ProductsSlider";
import ProductDetailsComponent from "../../components/ProductDetails";

const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/material-ui/getting-started/installation/"
              className="link transition"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/material-ui/getting-started/installation/"
              className="link transition"
            >
              Cropped Satin Bomber jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex items-center gap-8">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom></ProductZoom>
          </div>

          <div className="productContent w-[60%] pr-10 pl-10">
            <ProductDetailsComponent />
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[17px] font-[500] cursor-pointer ${
                activeTab === 0 && "text-primary-500"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>

            <span
              className={`link text-[17px] font-[500] cursor-pointer ${
                activeTab === 1 && "text-primary-500"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Detail
            </span>

            <span
              className={`link text-[17px] font-[500] cursor-pointer ${
                activeTab === 2 && "text-primary-500"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Review(5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p>
                The best is yet to come! Give your walls a voice with a framed
                poster. This aethestic, optimistic poster will look great in
                your desk or in an open-space office. Painted wooden frame with
                passe-partout for more death.
              </p>
              <h4>Lightweight Design</h4>

              <p>
                Designed with a super light geometric case, the Versa family
                watches are slim, casual and comfortable enough to wear all day
                and night. Switch up your look with classic, leather, metal and
                woven accessory bands. Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapilus leo.
              </p>

              <h4>Free Shipping & Return</h4>

              <p>
                We offer free shipping for products on orders above 50$ and
                offer free delivery for all orders in US.
              </p>

              <h4>Money Back Guarantee</h4>

              <p>
                We Guarantee our products and you could get back all of your
                money anytime you want in 30 days.
              </p>

              <h4>Online Support</h4>
              <p>
                You will get 24 hour support with this purchase product and you
                can return it within 30 days for an exchange.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        STAND UP
                      </th>
                      <th scope="col" className="px-6 py-3">
                        FOLDED(W/O wHEELS)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        FOLDED(W/ WHEELS)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        DOOR PASS THROUGH
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td className="px-6 py-4">
                        35”L x 24”W x 37–45”H{" "}
                        <span className="text-gray-500">
                          (front to back wheel)
                        </span>
                      </td>
                      <td className="px-6 py-4">32.5”L x 18.5”W x 16.5”H</td>
                      <td className="px-6 py-4">32.5”L x 24”W x 18.5”H</td>
                      <td className="px-6 py-4">24</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        35”L x 24”W x 37–45”H
                        <span className="text-gray-500">
                          (front to back wheel)
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 18.5”W x 16.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 24”W x 18.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        35”L x 24”W x 37–45”H
                        <span className="text-gray-500">
                          (front to back wheel)
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 18.5”W x 16.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 24”W x 18.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        35”L x 24”W x 37–45”H
                        <span className="text-gray-500">
                          (front to back wheel)
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 18.5”W x 16.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 24”W x 18.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class="px-6 py-4 font-[500]">
                        35”L x 24”W x 37–45”H
                        <span className="text-gray-500">
                          (front to back wheel)
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 18.5”W x 16.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 24”W x 18.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[22px]">Customer question & answer</h2>

                <div className="scroll pr-5 w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://cinimage.org/wp-content/uploads/2021/10/Testimonial-Videos-1.png"
                          className="!w-full !h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Tenetur laborum cupiditate quas praesentium nisi
                          tempore doloribus! Deserunt adipisci corrupti quam
                          culpa dolor, similique pariatur nulla incidunt quo qui
                          consequuntur voluptates.
                        </p>
                      </div>
                    </div>

                    <Rating name="half-rating" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://cinimage.org/wp-content/uploads/2021/10/Testimonial-Videos-1.png"
                          className="!w-full !h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Tenetur laborum cupiditate quas praesentium nisi
                          tempore doloribus! Deserunt adipisci corrupti quam
                          culpa dolor, similique pariatur nulla incidunt quo qui
                          consequuntur voluptates.
                        </p>
                      </div>
                    </div>

                    <Rating name="half-rating" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://cinimage.org/wp-content/uploads/2021/10/Testimonial-Videos-1.png"
                          className="!w-full !h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Tenetur laborum cupiditate quas praesentium nisi
                          tempore doloribus! Deserunt adipisci corrupti quam
                          culpa dolor, similique pariatur nulla incidunt quo qui
                          consequuntur voluptates.
                        </p>
                      </div>
                    </div>

                    <Rating name="half-rating" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://cinimage.org/wp-content/uploads/2021/10/Testimonial-Videos-1.png"
                          className="!w-full !h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Tenetur laborum cupiditate quas praesentium nisi
                          tempore doloribus! Deserunt adipisci corrupti quam
                          culpa dolor, similique pariatur nulla incidunt quo qui
                          consequuntur voluptates.
                        </p>
                      </div>
                    </div>

                    <Rating name="half-rating" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://cinimage.org/wp-content/uploads/2021/10/Testimonial-Videos-1.png"
                          className="!w-full !h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Tenetur laborum cupiditate quas praesentium nisi
                          tempore doloribus! Deserunt adipisci corrupti quam
                          culpa dolor, similique pariatur nulla incidunt quo qui
                          consequuntur voluptates.
                        </p>
                      </div>
                    </div>

                    <Rating name="half-rating" defaultValue={4} readOnly />
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#f1f1f1] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>
                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="write a review"
                      multiline
                      className="w-full"
                      rows={5}
                    />
                    <br /> <br />
                    <Rating name="half-rating" defaultValue={4} />
                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container pt-8 ">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider item={6}></ProductsSlider>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
