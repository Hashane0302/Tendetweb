import TitleBtn from "../SectionThree/TitleBtn";
import BoxSection from "./BoxSection";

const FourthSection = () => {
  return (
    <div className="bg-[#060640] -mt-[150px] pb-28">
      <div className="px-4 sm:px-10 xl:pl-20 pt-[180px]">
        <TitleBtn />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="md:col-span-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-6 sm:mt-10 text-white">
              Effortless Tender Management: <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">
                Transforming
              </span>{" "}
              Tenders into Seamless Success
            </h2>
            <BoxSection />
          </div>
          <div className="md:col-span-6 flex justify-center mt-8 sm:mt-12 lg:mt-44">
            <img
              className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-full"
              src="./Permsisionboard.png"
              alt="User Permission Screen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
