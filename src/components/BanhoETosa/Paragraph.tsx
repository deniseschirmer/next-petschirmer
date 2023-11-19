import React from "react";

type Props = {
  children: string | JSX.Element;
};

const Paragraph = (props: Props) => {
  return (
    <p className="text-sm	font-normal text-black-content md:text-lg">
      {props.children}
    </p>
  );
};

export default Paragraph;
