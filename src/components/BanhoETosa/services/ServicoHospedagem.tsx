import React from "react";
import Container from "../Container";
import HeaderContainer from "../HeaderContainer";
import Image from "next/image";
import Paragraph from "../Paragraph";
import AssuranceList from "../AssuranceList";
import { accommodation } from "@/utils/contents/BanhoETosa";
const ServicoHospedagem = () => {
  return (
    <Container>
      <HeaderContainer
        pathImage="/hospedagem-ilustracao.svg"
        subTitle="Hospedagem"
      />
      <div className="flex flex-col lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-4 lg:w-1/2 md:gap-6">
          <Paragraph>
            Vai viajar e não tem com quer deixar seu pet, conte conosco para
            cuidar do seu amiguinho.
          </Paragraph>
          <Paragraph>
            Proporcione uma estadia confortável e segura para o seu pet.
          </Paragraph>
          <AssuranceList assuranceList={accommodation} />
        </div>
        <Image
          src="/dog-accommodation.jpg"
          alt="cachorro em comodidade"
          className="w-full mt-3 rounded-tr-[5rem] rounded-bl-[5rem] lg:w-[45%] lg:mt-0"
          width={314}
          height={220}
        />
      </div>
    </Container>
  );
};

export default ServicoHospedagem;