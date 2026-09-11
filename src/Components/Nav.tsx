import logo from "../assets/logo-text.png";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  return (
    <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
      <FiMenu className="text-xl sm:text-2xl md:hidden" />

      <img src={logo} alt="logo" className="h-7 sm:h-9" />

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <a href="" className="hover:text-pink-500 transition-colors">
          Home
        </a>
        <a href="" className="hover:text-pink-500 transition-colors">
          Technologies
        </a>
        <a href="" className="hover:text-pink-500 transition-colors">
          Projects
        </a>
        <a href="" className="hover:text-pink-500 transition-colors">
          About
        </a>
        <a href="" className="hover:text-pink-500 transition-colors">
          Contact
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <button className="text-xs sm:text-sm font-medium text-gray-700 hover:text-pink-500">
          Sign In
        </button>
        <button className="rounded-full bg-pink-500 px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 text-xs sm:text-sm font-semibold text-white hover:bg-pink-600 transition-colors">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
