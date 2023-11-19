"use client";
import Image from "next/image";
import CardWork from "../CardWork";
import { care, works, transport } from "@/utils/contents/BanhoETosa";
import Care from "../Care";
import Paragraph from "../Paragraph";
import { MagicMotion } from "react-magic-motion";
import Container from "../Container";
import HeaderContainer from "../HeaderContainer";
import AssuranceList from "../AssuranceList";
const ServicoBanho = () => {
  return (
    <Container>
      <div>
        <HeaderContainer
          pathImage="/banho-e-tosa-ilustracao.svg"
          subTitle="Banho e tosa"
        />
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

              <AssuranceList assuranceList={care} />
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
      </div>
    </Container>
  );
};

export default ServicoBanho;
