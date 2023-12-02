import React from "react";
import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";
import CardServices from "./CardServices";
import { objService } from "@/utils/contents/servicesCards";
import { ServerInsertedHTMLContext } from "next/navigation";
const Services = () => {
  return (
    <section className="bg-light-brown relative w-full py-6 px-6">
      <h1 className="text-left text-2xl md:text-3xl font-extrabold mb-4 mt-5">
        Serviços
      </h1>
      <div className="flex flex-wrap md:flex-wrap  w-full h-full px-4 md:px-4 lg:px-6 xl:px-12 md:flex-col lg:flex-row pt-2 pb-6 md:pb-14 lg:pb-16 gap-4 justify-center items-center ">
        {objService.map((service) => (
          <CardServices
            key={service.id}
            id={service.id}
            pathImage={service.pathImage}
            altDescription={service.altDescription}
            serviceName={service.serviceName}
            description={service.description}
            serviceList={service.serviceList}
          />
        ))}
        <div className="flex text-sm md:text-base lg:text-lg py-3 px-4 md:px-18 flex-wrap md:flex-nowrap items-center justify-center gap-2">
          <p className="flex font-nunito text-sm items-center justify-center">
            Segurança e o bem-estar do seu pet é a nossa prioridade. Garantindo
            que ele receba o melhor atendimento.
          </p>
          <button className="flex bg-dark-green rounded-md text-white w-80 h-9 md:w-55 lg:w-56  lg:h-11 text-sm md:text-base items-center justify-center p-1 gap-2">
            Veja todos os detalhes
            <BiSolidRightArrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
