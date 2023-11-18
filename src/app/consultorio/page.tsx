import Footer from "@/components/Footer";

import ContentBoxImage from "@/components/ContetnBoxImage";
import Title from "@/components/Title";
import ContentBoxText from "@/components/ContentBoxText";

const page = () => {
  return (
    <>
      <div className="flex flex-col p-4 md:p-12 mx-auto">
        <Title />

        <div className="flex flex-col-reverse gap-8 xl:flex-row xl:px-5 mt-8 justify-center items-center">
          <ContentBoxText />
          <ContentBoxImage />
        </div>
      </div>
      <div className="absolute bottom-0 max-xl:relative max-xl:bottom-auto w-full">
        <Footer />
      </div>
    </>
  );
};

export default page;
