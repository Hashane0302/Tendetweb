const FooterMenu = () => {
  return (
    <>
      {/* First Row of Menu Items */}
      <div className="grid grid-cols-2 lg:gap-20 gap-4 sm:flex sm:flex-row list-none text-sm sm:text-base lg:text-lg justify-center text-white">
        <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
          Home
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
          About Us
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
          Feature
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
          Benefits
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
          Pricing
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
          Contact Us
        </li>
      </div>

      {/* Second Row of Menu Items */}
      <div className="grid grid-cols-2 lg:gap-20  gap-4 sm:flex sm:flex-row list-none text-sm sm:text-base lg:text-lg justify-center text-white mt-2 sm:mt-4">
        <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
          Blog
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
          Terms & Conditions
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
          Privacy Policy
        </li>
      </div>
    </>
  );
};

export default FooterMenu;
