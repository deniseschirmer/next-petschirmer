import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Hero from "@/components/Hero";

const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <h1 className="text-dark-green text-lg"> Titulo</h1>
    </>
  );
};

export default Page;
