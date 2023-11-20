import React from "react";

type Props = {
  children: string | JSX.Element;
  resize?: true;
};

const Paragraph = (props: Props) => {
  return (
    <p
      className={`text-sm	font-normal text-black-content md:text-lg ${
        props.resize ? "xl:w-1/2" : ""
      }`}
    >
      {props.children}
    </p>
  );
};

export default Paragraph;