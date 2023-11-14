import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Services from "@/components/Services";
import Consultorio from "@/components/Consultorio";
import Contato from "@/components/Contato";
import Carrossel from "@/components/Carrossel";

const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <Sobre />
      <Services />
      <Consultorio />
      <Contato />
      <Carrossel />
    </>
  );
};

export default Page;
