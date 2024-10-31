import { useState, useEffect } from "react";
import CountUp from "react-countup";

const MidSection = () => {
  // State to control when counters should start
  const [startCounters, setStartCounters] = useState(false);

  // Start counters after the component loads
  useEffect(() => {
    const timer = setTimeout(() => setStartCounters(true), 500); // Delay start if desired
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-20 py-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:grid-cols-1 text-center items-center w-full h-auto md:h-60 mx-auto bg-custom-gradient rounded-xl p-4 md:p-6">
        {/* Counter 1 */}
        <div className="flex flex-col items-center">
          {startCounters && (
            <CountUp
              start={0}
              end={2000}
              duration={2}
              suffix="+"
              className="text-3xl sm:text-4xl font-bold text-white"
            />
          )}
          <span className="text-md sm:text-lg text-white mt-3 sm:mt-5">
            Active Tenders
          </span>
        </div>

        {/* Counter 2 */}
        <div className="flex flex-col items-center">
          {startCounters && (
            <CountUp
              start={0}
              end={410}
              duration={2}
              suffix="+"
              className="text-3xl sm:text-4xl font-bold text-white"
            />
          )}
          <span className="text-md sm:text-lg text-white mt-3 sm:mt-5">
            Companies
          </span>
        </div>

        {/* Counter 3 */}
        <div className="flex flex-col items-center">
          {startCounters && (
            <CountUp
              start={0}
              end={3560}
              duration={2}
              suffix="+"
              className="text-3xl sm:text-4xl font-bold text-white"
            />
          )}
          <span className="text-md sm:text-lg text-white mt-3 sm:mt-5">
            Users
          </span>
        </div>

        {/* Counter 4 */}
        <div className="flex flex-col items-center">
          {startCounters && (
            <CountUp
              start={0}
              end={200}
              duration={2}
              suffix="+"
              className="text-3xl sm:text-4xl font-bold text-white"
            />
          )}
          <span className="text-md sm:text-lg text-white mt-3 sm:mt-5">
            Active Bids
          </span>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
