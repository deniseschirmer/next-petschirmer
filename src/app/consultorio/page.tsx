import ContentBoxImage from "@/components/ContetnBoxImage";
import Title from "@/components/Title";
import ContentBoxText from "@/components/ContentBoxText";

const page = () => {
  return (
    <>
      <div className="flex flex-col p-4 md:p-12 mx-auto md:flex-wrap lg:flex-nowrap font-nunito md:py-10 md:px-6 lg:px-12 lg:mt-5 gap-6 xl:gap-12">
        <Title />

        <div className="flex w-full flex-col-reverse gap-8 xl:flex-row xl:px-5 mt-8 justify-center items-center">
          <ContentBoxText />
          <ContentBoxImage />
        </div>
      </div>
      <div className="absolute bottom-0 max-xl:relative max-xl:bottom-auto w-full"></div>
    </>
  );
};

export default page;
