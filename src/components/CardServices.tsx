import React from "react";
import Image from "next/image";
import { IService } from "@/interface/services";
import { FaCheck } from "react-icons/fa6";
import AssuranceList from "./BanhoETosa/AssuranceList";
import Care from "@/components/BanhoETosa/Care";
const CardServices = (props: IService) => {
  return (
    <div className=" bg-white w-[340px]  md:w-[528px]  lg:w-[30%]  rounded-2xl p-4 flex flex-col gap-7 lg:min-h-[34.688rem]">
      {/**Cabeçalho do componente de serviço */}
      <div className="flex items-center">
        <Image
          src={props.pathImage}
          alt={props.altDescription}
          className="object-top rounded-full p-2"
          width={75}
          height={75}
        />
        <span className="font-nunito text-xl md:text-2xl font-bold text-black">
          {props.serviceName}
        </span>
      </div>
      <p className="text-sm md:text-base lg:text-lg">{props.description}</p>
      {/**Mapeia a lista de serviços */}
      {
        <ol className="flex flex-col gap-4 md:gap-5 lg:gap-7">
          {props.serviceList.map((element) => (
            <Care
              key={element.id}
              description={element.description}
              isHome={true}
            />
          ))}
        </ol>
      }
    </div>
  );
};

export default CardServices;
