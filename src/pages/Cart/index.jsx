import React, { useState } from "react";

import { Button } from "@mui/material";
import { IoBagCheckOutline } from "react-icons/io5";

import CartItem from "./CartItem";

const CartPage = () => {
  return (
    <section className="section py-10 pb-10">
      <div className="container flex w-[80%] max-w-[80%] gap-5">
        <div className="leftPart w-[75%]">
          <div className="shadow-md rounded-md p-5 bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There are <span>2</span>products in your cart
              </p>
            </div>

            <CartItem size="S" qty={1} />
            <CartItem size="S" qty={1} />

            <CartItem size="S" qty={1} />
            <CartItem size="S" qty={1} />
          </div>
        </div>

        <div className="righPart w-[30%]">
          <div className="shadow-md roundedo-md bg-white p-5">
            <h3 className="pb-3">Cart Totals</h3>
            <hr />
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-primary-500 font-bold">1,300.00</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="text-primary-500 font-bold">Free</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Estimate for</span>
              <span className="text-primary-500 font-bold">United Kingdom</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="text-primary-500 font-bold">1,300.00</span>
            </p>
            <br />

            <Button className="btn-org btn-lg w-full flex gap-2 items-center">
              <IoBagCheckOutline className="text-[20px]" />
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
