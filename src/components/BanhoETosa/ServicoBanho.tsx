"use client";
import Image from "next/image";
import CardWork from "./CardWork";
import { care, works } from "@/utils/contents/BanhoETosa";
import Care from "./Care";
import Paragraph from "./Paragraph";
import { MagicMotion } from "react-magic-motion";
const ServicoBanho = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-extrabold mb-3 md:text-3xl">Serviços</h1>
      <section className="border-solid border-black border-2 p-3 md:p-8 rounded-2xl flex flex-col">
        <div className="flex flex-row justify-start items-center gap-4 mb-6">
          <Image
            src="/banho-e-tosa-ilustracao.svg"
            alt="Ilustração tosa"
            className="md:w-[4.688rem]"
            width={64}
            height={64}
          />
          <h2 className="text-xl font-bold md:text-3xl">Banho e tosa </h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div>
            <div className="flex flex-col gap-4">
              <Paragraph>
                Aqui no Pet Schirmer o bem-estar do seu pet é nossa prioridade,
                garantimos que ele se sentirá confortável e seguro durante todo
                o processo.
              </Paragraph>
              <Paragraph>
                Nossa equipe experiente e dedicada, está pronta para oferecer os
                cuidados e atenção que seu pet merece.
              </Paragraph>
              {/**Mapeia o objeto care(cuidados) para criar os respectivos componentes*/}
              <ol className="flex flex-col gap-4">
                {care.map((element) => (
                  <Care key={element.id} description={element.description} />
                ))}
              </ol>
            </div>
          </div>
          <Image
            src="/banho-dog.png"
            width={656}
            height={457}
            alt="cachorro tomando banho"
            className="w-full mt-3 rounded-tr-[5rem] rounded-bl-[5rem] lg:w-1/2"
          />
        </div>
        {/* <div
          className="bg-full bg-center w-full bg-no-repeat rounded-bl-3xl rounded-tr-3xl h-[13.938rem] md:w-full md:h-[28.563rem]"
          style={{
            backgroundImage: "url(/banho-dog.png)",
          }}
        ></div> */}
        <hr className="h-[2px] my-5 bg-black border-1 dark:bg-gray-700" />
        <div>
          <h3 className="text-xl font-semibold mb-8 md:text-2xl">
            Como Funciona
          </h3>
          <div className="flex flex-col gap-5 md:gap-5 md:flex-row md:flex-wrap xl:flex-nowrap">
            {/**método criado para evitar a repetição de componentes */}
            {works.map((work) => (
              <MagicMotion key={work.id}>
                <CardWork id={work.id} description={work.description} />
              </MagicMotion>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicoBanho;
