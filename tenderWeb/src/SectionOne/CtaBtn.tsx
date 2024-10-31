import { FaArrowRight } from "react-icons/fa";

const CtaBtn = () => {
  return (
    <div className="login-btn animate-bounce w-48 h-14 px-6 py-3 text-center  text-[#3758f9] text-base font-medium font-['Inter'] leading-normal cursor-pointer bg-white hover:bg-slate-200 duration-200 rounded-full shadow justify-center items-center gap-2 inline-flex">
      <div className="w-5 h-5 relative">
        <div className="w-4 h-5 left-[1.19px] top-[0.53px] absolute"></div>
        <FaArrowRight />
      </div>

      <div className="">Get Started</div>
    </div>
  );
};

export default CtaBtn;
