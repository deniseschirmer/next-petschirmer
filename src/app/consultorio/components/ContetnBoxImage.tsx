import Image from "next/image";

const ContentBoxImage = () => {
  return (
    <>
      <div className="flex items-center md:w-[602px] w-full my-5">
        <Image
          src="/vet-dog.jpg"
          alt="Veterinário mais cachorro"
          className="w-full object-cover rounded-3xl md:rounded-[90px] max-h-[333px] justify-center"
          width={0}
          height={0}
          quality={100}
          sizes="100vw"
        />
      </div>
    </>
  );
};

export default ContentBoxImage;
