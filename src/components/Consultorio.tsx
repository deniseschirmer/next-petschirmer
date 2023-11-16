import Image from "next/image";
const Consultorio = () => {
  return (
    <section className="flex flex-wrap md:flex-wrap lg:flex-nowrap font-nunito md:py-10 md:px-36 lg:px-36 lg:mt-5 gap-6 xl:gap-24">
      <div className=" p-4 xl:p-10">
        <h1 className="text-black font-extrabold text-2xl md:text-3xl mb-6">
          Consultório Veterinário
        </h1>

        <p className="mb-4 text-sm md:text-base lg:text-lg font-normal leading-5">
          Contamos também com uma profissional veterinária altamente qualificada
          para cuidar da saúde do seu pet.
        </p>
        <p className="mb-4 font-normal text-sm md:text-base lg:text-lg leading-7">
          Estamos prontos para realizar consultas, exames, vacinações garantindo
          o melhor cuidado para o seu amiguinho.
        </p>
        <p className="font-normal text-sm md:text-base lg:text-lg leading-7">
          Além disso, prezamos pela comunicação clara e transparente, sempre
          explicando os procedimentos e orientando sobre os cuidados necessários
        </p>
        <div className=" p-4 flex w-full items-center justify-center">
          <button className="flex bg-dark-green rounded-md text-white w-80 h-9 md:w-55 lg:w-56  lg:h-11 text-sm md:text-base items-center justify-center p-1 gap-2 my-6 ">
            Saiba mais
          </button>
        </div>
      </div>
      <div className=" p-4 flex w-full items-center justify-center">
        <Image
          src="/bullfrances.png"
          alt="Foto Bulldog Frances"
          className="object-top"
          width={350}
          height={350}
        />
      </div>
    </section>
  );
};

export default Consultorio;
