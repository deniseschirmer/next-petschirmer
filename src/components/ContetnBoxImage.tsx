import Image from "next/image";

const ContentBoxImage = () => {
  return (
    <>
      <div className="p-4 flex w-full items-center justify-center">
        <Image
          src="/vet-dogg.jpg"
          alt="Veterinário mais cachorro"
          className="w-full lg:mt-0 rounded-tr-[4rem] rounded-bl-[4rem] lg:w-[50%] xl:w-1/2"
          width={150}
          height={150}
          quality={100}
        />
      </div>
    </>
  );
};

export default ContentBoxImage;
