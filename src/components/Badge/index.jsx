import React from "react";

const Badge = (props) => {
  return (
    <span
      className={`flex items-center justify-center py-1 px-2 text-[12px] capitalize ${
        props.status === "pending" && "bg-primary-500 text-white"
      } ${props.status === "confirm" && "bg-green-500 text-white"} ${
        props.status === "delivered" && "bg-green-700 text-white"
      }`}
    >
      {props.status}
    </span>
  );
};

export default Badge;
