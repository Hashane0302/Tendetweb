import AboutCta from "./AboutCta";
import TitleBtn from "./TitleBtn";

const SectionTwo = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 md:pl-20 bg-[#060640]">
      <div className="col-span-12 mt-10">
        <TitleBtn />
      </div>
      <div className="col-span-12 md:col-span-7 mt-5 gap-10 flex flex-col space-y-4 text-white sm:pr-10">
        <h2 className="text-3xl font-bold">
          Manage Tenders <span className="text-5xl">Effortlessly</span> – Upload
          and Bid with Confidence. Get Started Today
        </h2>

        <p className="text-xl">
          We harness the power of cutting-edge IT solutions to provide a
          seamless tender management experience, enabling clients to upload and
          bid for tenders with efficiency and precision. Our platform is
          designed to create long-term value by streamlining processes and
          driving successful outcomes, helping businesses achieve their
          strategic goals and stay competitive in an ever-evolving marketplace.
        </p>
        <div className="xl:pr-10  text-white ">
          <div className="flex gap-7">
            <div className="w-full h-[158px] bg-custom-gradient rounded-2xl flex flex-col justify-center items-cente items-center gap-4">
              <img src="./CusIcon.png" alt="Cutomer Icon" />
              <p className="xl:text-2xl text-center">24/7 Customer Support</p>
            </div>
            <div className="w-full h-[158px] bg-custom-gradient rounded-2xl flex flex-col justify-center items-cente items-center gap-4">
              <img src="./TransparancyIcon.png" alt="Cutomer Icon" />
              <p className="xl:text-2xl text-center">Transparency</p>
            </div>
          </div>
          <div className="flex gap-7 mt-7">
            <div className="w-full h-[158px] bg-custom-gradient rounded-2xl flex flex-col justify-center items-cente items-center gap-4">
              <img src="./HighSec.png" alt="Cutomer Icon" />
              <p className="xl:text-2xl text-center">High Security</p>
            </div>
            <div className="w-full h-[158px] bg-custom-gradient rounded-2xl flex flex-col justify-center items-cente items-center gap-4">
              <img src="./Certformicon.png" alt="Cutomer Icon" />
              <p className="xl:text-2xltext-center">Certified Platform</p>
            </div>
          </div>
        </div>
        <AboutCta />
      </div>
      <div className="col-span-12 md:col-span-5 flex items-center justify-center">
        <img src="./dashboard1.png" alt="" className="w-full " />
      </div>
    </div>
  );
};

export default SectionTwo;
