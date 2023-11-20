import ServicoBanho from "@/components/BanhoETosa/services/ServicoBanho";
import ServicoTransporte from "@/components/BanhoETosa/services/ServicoTransporte";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
const Banhoetosa = () => {
  return (
    <>
      <div className="flex flex-col gap-6 p-4">
        <h1 className="text-2xl font-extrabold mb-3 md:text-3xl">Serviços</h1>
        <ServicoBanho />
        <ServicoTransporte />
      </div>
      <Footer />
    </>
  );
};

export default Banhoetosa;
