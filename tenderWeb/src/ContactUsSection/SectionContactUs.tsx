import { FaPhone } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { IoMail } from "react-icons/io5";
import CtaBtn from "./CtaBtn";

const SectionContactUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 xl:px-20 bg-custom-gradient2">
      {/* Address Section Start here */}
      <div className="col-span-1 md:col-span-6 px-5 my-10 md:my-20">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl mt-6 md:mt-10  text-white">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
        <div className="mt-8 md:mt-10  text-white">
          <div className="flex text-lg md:text-xl items-center">
            <FaPhone />
            <p className="ml-5">001-333 28 00</p>
          </div>
          <div className="flex text-lg md:text-xl mt-4 md:mt-5 items-center">
            <HiLocationMarker />
            <p className="ml-5">Stockholm, Sweden</p>
          </div>
          <div className="flex text-lg md:text-xl mt-4 md:mt-5 items-center">
            <IoMail />
            <p className="ml-5">mail@tendmaker.se</p>
          </div>
        </div>
      </div>
      {/* Address Section ends here */}

      {/* Form Start here */}
      <form className="col-span-1 md:col-span-6 mx-4 md:mx-0 my-10 md:my-20 space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full ">
            <label className="block text-white" htmlFor="first-name">
              First Name
            </label>
            <input
              id="first-name"
              name="first-name"
              autoComplete="given-name"
              className="border-2 w-full h-10 rounded-sm"
              type="text"
            />
          </div>
          <div className="w-full mt-4 md:mt-0 ">
            <label className="text-white" htmlFor="last-name">
              Last Name
            </label>
            <input
              id="last-name"
              name="last-name"
              className="border-2 w-full h-10  rounded-sm"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full">
            <label className="text-white" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="border-2 w-full h-10 rounded-sm"
              type="email"
              autoComplete="email"
            />
          </div>
          <div className="w-full mt-4 md:mt-0">
            <label className="text-white" htmlFor="phone-number">
              Phone
            </label>
            <input
              id="phone-number"
              name="phone-number"
              className="border-2 w-full h-10 rounded-sm"
              type="tel"
              autoComplete="tel"
            />
          </div>
        </div>
        <div>
          <label className="text-white" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border-2 w-full h-40"
            autoComplete="message"
          />
        </div>
        <div className="flex items-center">
          <input type="checkbox" name="checkbox" className="mr-2" />
          <label className="text-white" htmlFor="checkbox">
            I accept the terms and conditions
          </label>
        </div>
        <div className="block mt-6">
          <CtaBtn />
        </div>
      </form>
      {/* Form Ends Here */}
    </div>
  );
};

export default SectionContactUs;
