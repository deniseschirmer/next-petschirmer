import Footer from "@/components/Footer";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <section className="flex flex-col p-4 md:p-12 mx-auto font-nunito md:py-10 md:px-36 lg:px-36 lg:mt-5 gap-6 xl:gap-24">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-extrabold pt-6 px-4 md:p-16">
              Entre em Contato
            </h1>
            <p className="mb-4 text-sm md:text-base lg:text-lg font-normal leading-5">
              Ficamos felizes em receber sua mensagem. Entre em contato para
              tirar suas dúvidas, agendar serviços e consultas. Estamos prontos
              para ajudar.
            </p>
            <form action="flex">
              <div className="">
                <input
                  className="w-full h-[58px] t-72 rounded-lg border-2 py-1 px-4 my-2 gap-2 pl-10"
                  type="text"
                  name="nome"
                  id=""
                  placeholder="Nome"
                />
              </div>
              <div className="">
                <input
                  className="w-full h-[58px] t-72 rounded-lg border-2 py-1 px-4 my-2 gap-2 pl-10"
                  type="text"
                  name="telefone"
                  id=""
                  placeholder="Telefone"
                />
              </div>
              <div className="">
                <textarea
                  className="w-full h-[120px] t-72 rounded-lg border-2 py-1 px-4 my-2 gap-2 pl-10"
                  name="mensagem"
                  id=""
                  placeholder="Mensagem"
                ></textarea>
              </div>
              <button className="flex bg-dark-green rounded-md text-white w-80 h-9 md:w-[696px] lg:w-[515px] lg:h-11 text-sm md:text-base items-center justify-center p-1 gap-2 my-6 ">
                Enviar
              </button>
            </form>
          </div>
          <div className="md:w-1/2 p-4 flex items-center justify-center">
            <Image
              src="/form-dog.png"
              alt="Foto Spitz formulário"
              className="object-top"
              width={350}
              height={398}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
