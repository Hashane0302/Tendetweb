// Navbar.tsx
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import LoginBtn from "./LoginBtn";
import Logo from "./Logo";

interface NavbarProps {
  scrollToSection: (
    section: "home" | "about" | "feature" | "benefits" | "pricing" | "contact"
  ) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="flex flex-col sticky top-0 z-50 items-center sm:flex-row sm:justify-between bg-[#00003E] text-white py-4 px-4 md:px-8 lg:px-16">
        <div className="flex justify-between w-full md:w-auto">
          <Logo />
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex sm:flex-grow justify-center">
          <HeaderMenu scrollToSection={scrollToSection} />
        </div>
        <div className="hidden md:block mt-4 sm:mt-0 justify-center sm:justify-end w-full sm:w-auto">
          <LoginBtn />
        </div>
      </div>
      <div
        className={`fixed top-20 z-40 w-full bg-custom-gradient2 text-white py-4 transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        } md:hidden`}
      >
        <div className="flex flex-col items-center mt-10">
          <HeaderMenu scrollToSection={scrollToSection} />
          <div className="mt-10">
            <LoginBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
