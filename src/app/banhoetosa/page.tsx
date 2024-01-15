import ServicoBanho from "@/components/BanhoETosa/services/ServicoBanho";
import ServicoHospedagem from "@/components/BanhoETosa/services/ServicoHospedagem";
import ServicoTransporte from "@/components/BanhoETosa/services/ServicoTransporte";

const Banhoetosa = () => {
  return (
    <>
      <div className="flex flex-col gap-6 p-4">
        <h1 className="text-2xl font-extrabold mb-3 md:text-3xl">Serviços</h1>
        <ServicoBanho />
        <ServicoTransporte />
        <ServicoHospedagem />
      </div>
    </>
  );
};

export default Banhoetosa;
