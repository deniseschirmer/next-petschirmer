import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IWork } from "@/interface/works";
type Props = {};

const Care = ({ description }: IWork) => {
  return (
    <li className="flex flex-row gap-3 justify-start items-center">
      <FaCheck className="w-6 " />
      <span className="text-sm font-semibold">{description}</span>
    </li>
  );
};

export default Care;
