import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./css/main.css";

const Page: React.FC = () => {
  return (
    <div className="custom-bg flex flex-col justify-center items-center h-screen text-white">
      <div className="text-center mb-2">
        <h1 className="text-7xl font-bold mb-2">BEM-VINDO</h1>
        <p className="text-xl text-gray-200 mb-2">
          Uma jornada incrível começa aqui...
        </p>
        <div className="div-icon">
          <FontAwesomeIcon icon={faCode} className="custom-icon" />
        </div>
        <div className="atenciosamente">
          <span className="text-l text-gray-200 mb-2 ">Pet Schirmer</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
