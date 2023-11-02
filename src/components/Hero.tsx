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

        <div className="absolute left--12 top-1/3 ml-5">
          <h1 className="text-black text-2xl md:text-4xl xl:text-6xl font-extrabold leading-7 lg:leading-14 text-left mb-2">
            Quer ficar <br />
            Lindão?
          </h1>
          <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer">
            <button className="flex bg-dark-green rounded-lg text-white w-32 h-9 md:w-40 md:h-11 lg:w-44 lg:h-14 text-sm md:text-base items-center justify-center p-1">
              Agende agora! <FaWhatsapp size={20} className="ml-2" />
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap bg-light-brown items-center justify-between px-4 md:px-4 lg:px-6 xl:px-32 pt-7 pb-12">
        <div className="flex justify-between ">
          <Image
            src="/foto.png"
            alt="Imagem de fundo"
            className=" object-top"
            width={100}
            height={100}
          />

          <h2 className="text-black font-extrabold text-1xl md:text-2xl md:leading-7 lg:text-4xl font-nunito ml-4 p-2 ">
            Cuidamos do seu amiguinho com muito carinho!
          </h2>
        </div>
        <div className="flex items-center p-2 ml-24">
          <p className="pr-5 border-r border-gray-600 text-black font-normal text-1xl md:text-2xl lg:text-2xl font-nunito p-2">
            <span className="font-extrabold "> +12</span> <br /> anos de
            experiência{" "}
          </p>
          <p className="pl-5 text-black font-normal text-1xl md:text-2xl lg:text-2xl font-nunito lg:ml-3">
            <span className="font-extrabold"> +300</span> <br /> atendimentos
            por mês
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
