const AboutCta = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="login-btn w-[160px] sm:w-[200px] h-[50px] sm:h-[70px] px-4 sm:px-6 py-2 sm:py-3 text-center text-[#3758f9] text-sm sm:text-base font-medium font-['Inter'] leading-normal cursor-pointer bg-white hover:bg-slate-200 duration-200 rounded-full shadow justify-center items-center gap-2 inline-flex">
        <div>Get Started</div>
      </div>
      <div className="login-btn w-[160px] sm:w-[200px] h-[50px] sm:h-[70px] px-4 sm:px-6 py-2 sm:py-3 text-center border-2 text-white text-sm sm:text-base font-medium font-['Inter'] leading-normal cursor-pointer border-white hover:bg-slate-200 hover:text-[#060640] duration-200 rounded-full shadow justify-center items-center gap-2 flex">
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default AboutCta;
