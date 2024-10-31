import CtaBtn from "./CtaBtn";
import MainTitle from "./MainTitle";
import Partners from "./Partners";
import TitleBtn from "./TitleBtn";
import TitleDec from "./TitleDec";

const SectionOne = () => {
  return (
    <div className="SectionOne flex flex-col items-center justify-center gap-20">
      <TitleBtn />
      <MainTitle />
      <TitleDec />
      <CtaBtn />
      <Partners />
    </div>
  );
};

export default SectionOne;
