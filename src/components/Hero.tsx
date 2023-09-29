import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  // Número de telefone para o WhatsApp
  const numeroWhatsApp = "41988832614";

  // URL do link do WhatsApp
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}`;

  return (
    <section>
      <div className="relative w-full">
        <img
          src="/foto-principal.png"
          alt="Imagem de fundo"
          className="w-full h-auto mx-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
      <div>
        <h2>Cuidamos do seu amiguinho com muito carinho!</h2>
      </div>
    </section>
  );
};

export default Hero;
