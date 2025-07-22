import React from "react";

import SideNavbar from "./SideNavbar";
import Herobg from "../assets/empneobgbtr.jpg";
import logo from "../assets/empneologo.png";
import ieee from "../assets/ieeelogos.png";

function Hero() {
  return (
    <div
      className="w-[100vw] min-h-[100vh] flex items-center justify-center pt-16 sm:pt-20 md:pt-10 px-4 sm:px-6 md:px-8"
      id="hero-section"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover", // changed from "fill" to "cover"
        backgroundPosition: "center",
      }}
    >
      <SideNavbar />
      <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-8">
        <div className="flex items-center justify-center">
          <img
            src={ieee}
            alt="IEEE Logos"
            className="w-32 sm:w-40 md:w-48 lg:w-55 xl:w-60 h-auto z-10 hover:scale-110 transition-transform duration-300"
          />
        </div>
        <img
          src={logo}
          alt="Real Empneo Logo"
          className="w-64 sm:w-72 md:w-80 lg:w-90 xl:w-96 h-auto z-10 max-w-[90vw]"
        />
        <a
          href="https://bit.ly/EMPNEO9"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[MyFont] mt-2 sm:mt-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-[#D49C3E] text-[#D49C3E] text-base sm:text-lg md:text-xl rounded-md hover:bg-[#D49C3E] hover:text-white transition-all duration-300 w-auto min-w-[140px] sm:min-w-[160px] text-center inline-block"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}

export default Hero;
