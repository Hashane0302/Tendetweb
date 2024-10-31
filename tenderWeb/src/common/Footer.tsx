import FooterMenu from "./FooterMenu";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#11245E]">
      {/* Logo */}
      <div className="flex justify-center py-6 sm:py-10">
        <img
          className="w-32 sm:w-48"
          src="./Logo-Dark-bcakground.png"
          alt="Logo"
        />
      </div>

      {/* Footer Menu */}
      <div className="py-6 sm:py-10 px-20 sm:px-0">
        <FooterMenu />
      </div>

      {/* Social Icons */}
      <div className="flex justify-center pb-6 sm:pb-10 gap-4 sm:gap-8">
        <a href="#" className="cursor-pointer">
          <FaFacebookSquare color="white" size={28} />
        </a>
        <a href="#" className="cursor-pointer">
          <FaLinkedin color="white" size={28} />
        </a>
      </div>

      {/* Copyright Text */}
      <div className="px-4 sm:px-20">
        <p className="text-white text-center py-6 sm:py-10 border-t border-gray-400">
          © 2025 Trendmaker, Inc. All rights reserved. Designed by Pears
          Skandenevia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
