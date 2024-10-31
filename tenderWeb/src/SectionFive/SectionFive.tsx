import CtaBtn from "./CtaBtn";

const SectionFive = () => {
  return (
    <div className="homeMiddleBnr w-full flex flex-col justify-center items-center py-10 px-4 text-center bg-[#060640]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#11245E] mt-10 sm:mt-20">
        Ready to Collaborate? Start the Bidding on the <br /> Great Option
        Today!
      </h1>
      <div className="mt-10 sm:mt-20 pb-10 sm:pb-20">
        <CtaBtn />
      </div>
    </div>
  );
};

export default SectionFive;
