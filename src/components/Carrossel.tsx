import Image from "next/image";
const Carrossel = () => {
  return (
    <section className="flex flex-wrap lg:flex-nowrap  font-nunito py-6 md:py-14 lg:py-24 px-4 md:px-6 lg:px-12 ">
      <h1 className="text-black text-left font-semibold text-2xl  mb-6">
        Siga nossas redes sociais @petschirmer
      </h1>

      <div className=" p-4 flex  flex-wrap w-full items-center justify-center gap-3">
        <Image
          src="/marrie.png"
          alt="Foto gatinha Marrie"
          className="object-top"
          width={200}
          height={200}
        />
        <Image
          src="/nina.png"
          alt="Foto "
          className="object-top"
          width={200}
          height={200}
        />
        <Image
          src="/cat.png"
          alt="Foto "
          className="object-top"
          width={200}
          height={200}
        />
        <Image
          src="/cacau.png"
          alt="Foto"
          className="object-top"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};

export default Carrossel;
