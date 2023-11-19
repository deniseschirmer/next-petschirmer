import React from "react";
import Image from "next/image";

interface IHeader {
  pathImage: string;
  subTitle: string;
}
const HeaderContainer = ({ pathImage, subTitle }: IHeader) => {
  return (
    <div className="flex flex-row justify-start items-center gap-4 mb-6">
      <Image
        src={pathImage}
        alt="Ilustração tosa"
        className="md:w-[4.688rem]"
        width={64}
        height={64}
      />
      <h2 className="text-xl font-bold md:text-3xl">{subTitle}</h2>
    </div>
  );
};

export default HeaderContainer;
