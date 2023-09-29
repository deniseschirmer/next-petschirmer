import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";

const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <Sobre />
    </>
  );
};

export default Page;
