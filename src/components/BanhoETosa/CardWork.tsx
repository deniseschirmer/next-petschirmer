import React from "react";
import { IWork } from "@/interface/works";

const CardWork = ({ id, description }: IWork) => {
  return (
    <div className="flex flex-row gap-3 p-4 border-solid border-black border-2 rounded-lg items-center md:w-80 md:flex-auto lg:w-1/3">
      <span className="bg-yellow w-6 h-6 px-1 rounded-3xl text-center">
        {id}
      </span>
      <p className="text-sm font-bold break-keep md:font-normal xl:text-base">
        {description}
      </p>
    </div>
  );
};

export default CardWork;