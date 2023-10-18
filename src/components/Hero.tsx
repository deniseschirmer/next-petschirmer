import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  const numeroWhatsApp = "41988832614";

  // URL do link do WhatsApp
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}`;

  return (
    <section className="mt-[72px] md:mt-[104px]">
      <div className="relative w-full">
        <Image
          src="/foto-principal.png"
          alt="Imagem de fundo"
          className="w-full object-cover object-[10%_50%] min-h-[340px]"
          width={500}
          height={500}
        />

        <div className="absolute  left--12 top-1/3 ml-5">
          <h1 className="text-dark-green text-4xl lg:text-5xl font-extrabold leading-10 lg:leading-14 text-left">
            Quer ficar <br />
            Lindão?
          </h1>
          <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer">
            <button className="bg-dark-green rounded-lg text-white w-48 h-12 inline-flex items-center">
              Agende agora! <FaWhatsapp size={32} className="ml-2" />
            </button>
          </a>
        </div>
      </div>
      <div className="bg-light-brown p-4 pl-10 pr-10  flex items-center justify-around">
        <Image
          src="/foto.png"
          alt="Imagem de fundo"
          className=" mx-auto object-cover object-top"
          width={100}
          height={100}
        />

        <h2 className="text-black font-extrabold text-2xl md:text-3xl lg:text-4xl font-nunito">
          Cuidamos do seu amiguinho com muito carinho!
        </h2>
        <div className="flex items-center p-2">
          <p className=" border-r border-gray-600 text-black font-extrabold text-1xl md:text-2xl lg:text-2xl font-nunito">
            +12 anos de experiência{" "}
          </p>
          <p className="pl-10 text-black font-extrabold text-1xl md:text-2xl lg:text-2xl font-nunito">
            +300 atendimentos por mês
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
