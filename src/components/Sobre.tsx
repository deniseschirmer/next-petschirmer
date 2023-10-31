import Image from "next/image";
const Sobre = () => {
  return (
    <>
      <section className="flex flex-wrap md:flex-wrap lg:flex-nowrap font-nunito md:py-10 md:px-36 lg:px-36 lg:mt-5 gap-11 xl:gap-24">
        <div className=" p-4 xl:p-10">
          <h1 className="text-green font-bold text-sm md:text-base lg:text-3xl mb-6">
            Somos o Pet Schirmer
          </h1>

          <p className="mb-4 text-sm md:text-base lg:text-lg font-normal leading-7">
            Com mais de 12 anos de experiência, cuidamos do seu pet com carinho
            e dedicação, oferecendo uma variedade de produtos e serviços de
            qualidade.
          </p>
          <p className="mb-4 font-normal text-sm md:text-base lg:text-lg leading-7">
            Nossa loja é um ambiente seguro, onde você pode se sentir tranquilo
            ao trazer seu amiguinho de estimação.
          </p>
          <p className="font-normal text-sm md:text-base lg:text-lg leading-7">
            Conte conosco para cuidar do seu pet e proporcionar uma experiência
            confiável e satisfatória.
          </p>
        </div>
        <div className=" p-4 flex w-full items-center justify-center">
          <div className="flex justify-center items-center h-64 mr-2.5">
            <Image
              src="/dog1-sobre.png"
              alt="Foto de Cachorro 1"
              width={200}
              height={200}
            />
          </div>

          <div className=" ">
            <Image
              src="/dog2-sobre.png"
              alt="gatinho"
              width={200}
              height={200}
            />
            <Image
              src="/cat-sobre.png"
              alt="gatinho3"
              width={200}
              height={200}
              className="mt-2.5"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
