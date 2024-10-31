import CtaBtn from "./CtaBtn";
import FeaturesTitle from "./FeaturesTitle";
import TitleBtn from "./TitleBtn";

const SectionThree = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 place-items-center gap-4 mt-10 sm:mt-28">
          <TitleBtn />
          <FeaturesTitle />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12 mt-10 sm:mt-20">
          <div className="col-span-12 px-5 sm:xl:px-20">
            <div className="flex flex-col sm:flex-row justify-center xl:space-x-16 sm:space-x-5 space-y-4 sm:space-y-0">
              <div className="w-full p-4 max-w-md bg-custom-gradientblue rounded-2xl flex flex-col justify-center text-xl sm:text-3xl items-center gap-4">
                <h3 className="text-[#11245E] text-center font-bold">
                  Intuitive Dashboard
                </h3>
                <p className="text-base sm:text-xl text-white text-center">
                  A user-friendly interface for managing all tender activities
                  in one place.
                </p>
              </div>
              <div className="w-full p-4 max-w-md bg-custom-gradientblue rounded-2xl flex flex-col justify-center text-xl sm:text-3xl items-center gap-4">
                <h3 className="text-[#11245E] text-center font-bold">
                  Real-Time Tender Alerts
                </h3>
                <p className="text-base sm:text-xl text-center text-white">
                  Stay updated with notifications for new tender opportunities.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between xl:mt-16 mt-5 space-y-5 sm:space-y-0 sm:space-x-5">
              <div className="w-full p-4 max-w-md bg-custom-gradientblue rounded-2xl flex flex-col justify-center items-center gap-4 text-xl sm:text-3xl">
                <h3 className="text-[#11245E] text-center font-bold">
                  Bid Submission & Tracking
                </h3>
                <p className="text-base sm:text-xl text-white text-center">
                  Easily submit and monitor the status of your bids.
                </p>
              </div>
              <div className="w-full p-4 max-w-md bg-custom-gradientblue rounded-2xl flex flex-col justify-center items-center gap-4 text-xl sm:text-3xl">
                <h3 className="text-[#11245E] text-center font-bold">
                  Document Management
                </h3>
                <p className="text-base sm:text-xl text-white text-center">
                  Securely upload, store, and access all necessary tender
                  documents.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between xl:mt-16 mt-5 space-y-5 sm:space-y-0 sm:space-x-5">
              <div className="w-full p-4 max-w-md bg-custom-gradientblue rounded-2xl flex flex-col justify-center items-center gap-4 text-xl sm:text-3xl">
                <h3 className="text-[#11245E] text-center font-bold">
                  Tender Analytics & Reporting
                </h3>
                <p className="text-base sm:text-xl text-center text-white">
                  Get insights and detailed reports on bid performance and
                  outcomes.
                </p>
              </div>
              <div className="w-full p-4 max-w-md bg-custom-gradientblue rounded-2xl flex flex-col justify-center items-center gap-4 text-xl sm:text-3xl">
                <h3 className="text-[#11245E] font-bold text-center">
                  Multi-Tender Management
                </h3>
                <p className="text-base sm:text-xl text-center text-white">
                  Handle multiple tenders simultaneously with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="block mx-auto xl:-mt-[300px] mt-10 leqid max-w-full h-auto"
          src="./DASHBOARD 2.png"
          alt=""
        />
        <div className="flex justify-center">
          <CtaBtn />
        </div>
      </div>
    </>
  );
};

export default SectionThree;
