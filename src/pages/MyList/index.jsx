import React, { useState } from "react";
import MyListItem from "./myListItem";
import AccountSidebar from "../../components/AccountSidebar";

const MyList = () => {
  return (
    <>
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
                  There are <span>2</span> products in your My List
                </p>
              </div>

              <MyListItem />
              <MyListItem />
              <MyListItem />
              <MyListItem />
              <MyListItem />
              <MyListItem />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyList;
