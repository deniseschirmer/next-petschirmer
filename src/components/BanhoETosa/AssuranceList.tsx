import React from "react";
import Care from "./Care";
import { IWork, IAssurance } from "@/interface/works";
type Props = {};

const AssuranceList: React.FC<IAssurance> = ({ assuranceList }) => {
  return (
    <ol className="flex flex-col gap-4 md:gap-5">
      {assuranceList.map((element) => (
        <Care key={element.id} description={element.description} />
      ))}
    </ol>
  );
};
export default AssuranceList;
