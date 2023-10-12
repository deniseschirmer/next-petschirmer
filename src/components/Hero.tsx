import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const numeroWhatsApp = "41988832614";

  // URL do link do WhatsApp
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}`;

  return (
    <section>
      <div className="relative w-full">
        <img
          src="/foto-principal.png"
          alt="Imagem de fundo"
          className="w-full mx-auto object-cover object-top"
        />
        <div className="absolute left-12 top-1/3 ml-5">
          <h1 className="text-black text-4xl lg:text-5xl font-extrabold leading-10 lg:leading-14 text-left">
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
        <div className="flex p-2">
          <img src="/foto.png" alt="" className="w-16 h-16 rounded-full mr-8" />
          <h2 className="text-black font-extrabold text-3xl md:text-3xl lg:text-4xl font-nunito">
            Cuidamos do seu amiguinho com muito carinho!
          </h2>
        </div>
        <div className="flex items-center p-2">
          <p className="border-r border-gray-600 text-black font-extrabold text-1xl md:text-2xl lg:text-2xl font-nunito pr-2">
            +12 <br /> anos de experiência{" "}
          </p>
          <p className="pl-3 text-black font-extrabold text-1xl md:text-2xl lg:text-2xl font-nunito">
            +300 <br /> atendimentos por mês
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
