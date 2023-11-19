import React from "react";

type Props = {
  children: React.ReactNode;
};
const Container = ({ children }: Props) => {
  return (
    <section className="border-solid border-black border-2 p-3 md:p-8 rounded-2xl flex flex-col">
      {children}
    </section>
  );
};

export default Container;
