import Image from "next/image";
const Sobre = () => {
  // const image1 = {
  //   src: "/public/cat-sobre.png",
  //   alt: "Imagem de exemplo",
  // };
  // const image2 = {
  //   src: "../assets/dog1-sobre.png",
  //   alt: "Imagem de exemplo",
  // };
  // const image3 = {
  //   src: "../assets/dog2-sobre.png",
  //   alt: "Imagem de exemplo",
  // };
  return (
    <>
      <section className=" font-nunito border border-red-500 pt-4 pb-4">
        <div className=" p-4 border espace border-blue-500">
          <h1 className="text-green font-bold text-sm md:text-base lg:text-3xl lg:font-normal mb-6">Somos o Pet Schirmer</h1>

          <p className="mb-4 font-normal text-sm md:text-base lg:text-lg">
            Com mais de 12 anos de experiência, cuidamos do seu pet com carinho
            e dedicação, oferecendo uma variedade de produtos e serviços de
            qualidade.
          </p>
          <p className="mb-4 font-normal text-sm md:text-base lg:text-lg">
            Nossa loja é um ambiente seguro, onde você pode se sentir tranquilo
            ao trazer seu amiguinho de estimação.
          </p>
          <p className="font-normal text-sm md:text-base lg:text-lg">
            Conte conosco para cuidar do seu pet e proporcionar uma experiência
            confiável e satisfatória.
          </p>
        </div>
        <div className=" p-4 flex border border-green">
         
          <div className="border border-red-500 flex justify-center items-center h-64 mr-2.5">
            <Image src= "/dog1-sobre.png" alt="Foto de Cachorro 1" width={200} height={200} />
          </div>

          
            <div className="border border-yellow-500 ">
              <Image src="/dog2-sobre.png" alt="gatinho" width={200} height={200} />
              <Image src="/cat-sobre.png" alt="gatinho3" width={200} height={200} className="mt-2.5"/>
            </div>
          


          </div>
        </section>
    </>
  );
};

export default Sobre;
