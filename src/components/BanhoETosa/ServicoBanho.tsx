import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import CardWork from "./CardWork";
import { works } from "@/utils/contents/works";

const ServicoBanho = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-extrabold mb-3">Serviços</h1>
      <section className="border-solid border-black border-2 p-3 rounded-2xl flex flex-col">
        <div className="flex flex-row justify-start items-center gap-4 mb-6">
          <Image
            src="/banho-e-tosa-ilustracao.svg"
            alt="Ilustração tosa"
            className=""
            width={64}
            height={64}
          />
          <h2 className="text-xl font-bold">Banho e tosa </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm	font-normal text-black-content">
            Aqui no Pet Schirmer o bem-estar do seu pet é nossa prioridade,
            garantimos que ele se sentirá confortável e seguro durante todo o
            processo.
          </p>
          <p className="text-sm	font-normal text-black-content">
            Nossa equipe experiente e dedicada, está pronta para oferecer os
            cuidados e atenção que seu pet merece.
          </p>
          <ol className="flex flex-col gap-4">
            <li className="flex flex-row gap-3 justify-start items-center">
              <FaCheck className="w-6 " />
              <span className="text-sm font-semibold">
                Produtos de banho de alta qualidade
              </span>
            </li>
            <li className="flex flex-row gap-3 justify-start items-center">
              <FaCheck className="w-6" />
              <span className="text-sm font-semibold">
                Limpeza das orelhas e corte de unha
              </span>
            </li>
            <li className="flex flex-row gap-3 justify-start items-center">
              <FaCheck className="w-6" />
              <span className="text-sm font-semibold">
                Equipamentos seguros
              </span>
            </li>
            <li className="flex flex-row gap-3 justify-start items-center">
              <FaCheck className="w-6" />
              <span className="text-sm font-semibold">
                Secagem adequada para não causar desconforto
              </span>
            </li>
          </ol>
        </div>
        <Image
          src="/banho-dog.png"
          width={656}
          height={457}
          alt="cachorro tomando banho"
          className="mt-3"
        />
        <hr className="h-[2px] my-5 bg-black border-1 dark:bg-gray-700" />
        <h3 className="text-xl font-semibold mb-8">Como Funciona</h3>
        <div className="flex flex-col gap-5">
          {works.map((work) => (
            <CardWork
              key={work.id}
              id={work.id}
              description={work.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicoBanho;
