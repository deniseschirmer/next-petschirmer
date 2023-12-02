import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IWork } from "@/interface/works";

const Care = ({ description, isHome }: IWork) => {
  return (
    <li className="flex flex-row gap-3 justify-start items-center lg:gap-2">
      <FaCheck className="text-base md:text-lg w-[10%]" />
      <span
        className={
          isHome
            ? "text-sm font-semibold md:font-normal md:text-base lg:text-lg w-[90%]"
            : "text-sm font-semibold md:text-xl md:font-bold"
        }
      >
        {description}
      </span>
    </li>
  );
};

export default Care;
