import React, { useState } from "react";
import logo from "../assets/empneologo.png";
import { useNavigate } from "react-router-dom";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-black/20 backdrop-blur-sm">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 relative">
        {/* Logo */}
        <div
          className="cursor-pointer z-50"
          onClick={() => scrollToSection("hero-section")}
        >
          <img
            src={logo}
            alt="Empneo Logo"
            className="w-8 h-auto sm:w-10 md:w-12 z-10"
          />
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-6 xl:gap-12 font-[MyFont] text-[#D49C3E] text-lg xl:text-[22px] font-semibold">
          <div
            onClick={() => scrollToSection("hero-section")}
            className="cursor-pointer hover:text-[#DCAD5E] transition-colors"
          >
            home
          </div>
          <div
            onClick={() => scrollToSection("about-section")}
            className="cursor-pointer hover:text-[#DCAD5E] transition-colors"
          >
            about
          </div>
          <div
            onClick={() => scrollToSection("gallery-section")}
            className="cursor-pointer hover:text-[#DCAD5E] transition-colors"
          >
            gallery
          </div>
          <div
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-[#DCAD5E] transition-colors"
          >
            contact
          </div>
        </div>

        {/* Desktop Register Button */}
        <div className="hidden lg:flex font-[MyFont] text-lg xl:text-[22px] text-[#D49C3E] font-semibold">
          <div
            onClick={() => scrollToSection("register")}
            className="cursor-pointer hover:text-[#DCAD5E] transition-colors"
          >
            Register Now
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center  w-8 h-8 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#D49C3E] transition-all duration-300 absolute ${
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#D49C3E] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#D49C3E] transition-all duration-300 absolute ${
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed w-screen h-screen inset-0 top-0 bg-black/95 backdrop-blur-lg transition-all duration-500 ease-in-out z-40"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="flex flex-col items-center justify-center h-full w-full space-y-10 sm:space-y-12 font-[MyFont] text-[#D49C3E] text-3xl sm:text-4xl font-semibold"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                onClick={() => handleMenuItemClick("hero-section")}
                className="cursor-pointer hover:text-[#DCAD5E] transition-all duration-300 hover:scale-110 transform"
              >
                HOME
              </div>
              <div
                onClick={() => handleMenuItemClick("about-section")}
                className="cursor-pointer hover:text-[#DCAD5E] transition-all duration-300 hover:scale-110 transform"
              >
                ABOUT
              </div>
              <div
                onClick={() => handleMenuItemClick("gallery-section")}
                className="cursor-pointer hover:text-[#DCAD5E] transition-all duration-300 hover:scale-110 transform"
              >
                GALLERY
              </div>
              <div
                onClick={() => handleMenuItemClick("contact")}
                className="cursor-pointer hover:text-[#DCAD5E] transition-all duration-300 hover:scale-110 transform"
              >
                CONTACT
              </div>
              <a 
  href="https://forms.gle/FgNTJ1wMUZQUGR3j6" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <div
    onClick={() => handleMenuItemClick("register")}
    className="cursor-pointer transition-all duration-300 border-2 border-[#D49C3E] px-8 py-4 rounded-xl hover:bg-[#D49C3E] hover:text-black hover:scale-110 transform text-2xl sm:text-3xl mt-8"
  >
    REGISTER NOW
  </div>
</a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default TopNavbar;
