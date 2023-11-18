import React from "react";

interface Work {
  id: number;
  description: string;
}

const CardWork = ({ id, description }: Work) => {
  return (
    <div className="flex flex-row gap-3 p-3 border-solid border-black border-2 rounded-lg">
      <span className="bg-yellow w-6 h-6 px-1 rounded-3xl text-center">
        {id}
      </span>
      <p className="text-sm font-semibold break-keep">{description}</p>
    </div>
  );
};

export default CardWork;