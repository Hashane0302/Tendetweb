// HeaderMenu.tsx
import React from "react";

interface HeaderMenuProps {
  scrollToSection: (
    section: "home" | "about" | "feature" | "benefits" | "pricing" | "contact"
  ) => void;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ scrollToSection }) => {
  return (
    <ul className="sm:flex xl:space-x-4 xl:text-xl gap-4 ">
      <li
        className="cursor-pointer xl:pt-0  pt-2  hover:text-gray-300 transition duration-300 ease-in-out"
        onClick={() => scrollToSection("home")}
      >
        Home
      </li>
      <li
        className="cursor-pointer xl:pt-0  pt-2  hover:text-gray-300 transition duration-300 ease-in-out"
        onClick={() => scrollToSection("about")}
      >
        About
      </li>
      <li
        className="cursor-pointer xl:pt-0  pt-2   hover:text-gray-300 transition duration-300 ease-in-out"
        onClick={() => scrollToSection("feature")}
      >
        Features
      </li>
      <li
        className="cursor-pointer xl:pt-0  pt-2   hover:text-gray-300 transition duration-300 ease-in-out"
        onClick={() => scrollToSection("benefits")}
      >
        Benefits
      </li>
      <li
        className="cursor-pointer  xl:pt-0  pt-2   hover:text-gray-300 transition duration-300 ease-in-out"
        onClick={() => scrollToSection("pricing")}
      >
        Pricing
      </li>
      <li
        className="cursor-pointer  xl:pt-0  pt-2   hover:text-gray-300"
        onClick={() => scrollToSection("contact")}
      >
        Contact Us
      </li>
    </ul>
  );
};

export default HeaderMenu;
