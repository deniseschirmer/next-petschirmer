import React from "react";
import Container from "@/components/BanhoETosa/Container";
import HeaderContainer from "@/components/BanhoETosa/HeaderContainer";
import Paragraph from "@/components/BanhoETosa/Paragraph";
import AssuranceList from "../AssuranceList";
import { transport } from "@/utils/contents/BanhoETosa";

const ServicoTransporte = () => {
  return (
    <Container>
      <HeaderContainer
        pathImage="./transporte-ilustracao.svg"
        subTitle="Leva e traz"
      />
      <div className="flex flex-col gap-4">
        <Paragraph>
          Para o seu conforto temos o serviço de leva e traz, atendemos em um
          raio de até 5km. Confirme com a nossa equipe se o serviço atende a sua
          região.
        </Paragraph>
        <AssuranceList assuranceList={transport} />
      </div>
    </Container>
  );
};

export default ServicoTransporte;
