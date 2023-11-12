import { AiOutlineClockCircle } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";
import Iframe from "react-iframe";

const Contato = () => {
  return (
    <section className=" bg-light-brown relative w-full px-36 py-24">
      <div className="flex gap-12 ">
        <div className="w-full flex flex-col p-2 ">
          <h1 className="text-left text-2xl md:text-3xl font-extrabold  mb-8 ">
            Esperamos por você.
          </h1>
          <div className="flex flex-col gap-3 mb-6">
            <h3 className="flex text-sm md:text-lg font-nunito gap-3 font-bold">
              <AiOutlineClockCircle
                size={20}
                style={{ verticalAlign: "middle" }}
              />
              Horário de funcionamento
            </h3>
            <p className="pl-8 font-medium">Segunda a Sexta: 09h30 às 17h30</p>
            <p className="pl-8 font-medium">Sábado: 09h00 às 14h00</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="flex text-sm md:text-lg gap-3 font-bold">
              <TiLocationOutline size={20} />
              Endereço
            </h3>
            <p className="pl-8 font-medium">
              Rua Ildefonso Stockler de França, 48{" "}
            </p>
            <p className="pl-8 font-medium">Loja 04</p>
            <p className="pl-8 font-medium">Cep: 810.200-40</p>
            <p className="pl-8 font-medium">Curitiba/PR</p>
          </div>
          <button className="flex bg-transparent border-2 border-solid border-black rounded-md text-black w-32 h-11    lg:h-11 text-sm md:text-base items-center justify-center p-1 gap-2 my-6 ml-2">
            Google Maps
          </button>
        </div>
        <div className="flex w-full items-center justify-center object-fill">
          <iframe
            title="Google Maps"
            width="544"
            height="382"
            style={{ border: 0, borderRadius: "16px" }}
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.7335586837034!2d-49.293669324608956!3d-25.48057087752964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35c6f7f5895%3A0x6a2267e35e2b3df9!2sR.%20Ildefonso%20Stockler%20de%20Fran%C3%A7a%2C%2048%20-%20Novo%20Mundo%2C%20Curitiba%20-%20PR%2C%2081020-040!5e0!3m2!1spt-BR!2sbr!4v1699742037656!5m2!1spt-BR!2sbr"
            allow="fullscreen"
          />
        </div>
      </div>
    </section>
  );
};

export default Contato;
