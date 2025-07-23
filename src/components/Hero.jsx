import React from "react";

import SideNavbar from "./SideNavbar";
import Herobg from "../assets/empneobgbtr.jpg";
import logo from "../assets/empneologo.png";
import ieee from "../assets/ieeelogos.png";

function Hero() {
  return (
    <div
      className="w-[100vw] min-h-[100vh] pt-[-0px] flex items-center justify-center sm:pt-20 md:pt-10 px-4 sm:px-6 md:px-8"
      id="hero-section"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover", // changed from "fill" to "cover"
        backgroundPosition: "center",
      }}
    >
      <SideNavbar />
      <div className="flex flex-col items-center text-center space-y-14 sm:space-y-6 md:space-y-8 w-full max-w-4xl">
        <div className="flex items-center justify-center">
          <img
            src={ieee}
            alt="IEEE Logos"
            className="w-72 sm:w-48 md:w-56 lg:w-64 xl:w-80 scale-110 h-auto z-10 hover:scale-130 transition-transform duration-300 max-w-[85vw]"
          />
        </div>
        <img
          src={logo}
          alt="Real Empneo Logo"
          className="w-80 sm:w-80 md:w-96 lg:w-[400px] xl:w-[450px] h-auto z-10 max-w-[90vw]"
        />
        <a
          href="https://bit.ly/EMPNEO9"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[MyFont] mt-4 sm:mt-4 px-6 sm:px-6 md:px-8 py-3 sm:py-3 border-2 border-[#D49C3E] text-[#D49C3E] text-lg sm:text-lg md:text-xl rounded-md hover:bg-[#D49C3E] hover:text-white transition-all duration-300 w-auto min-w-[160px] sm:min-w-[160px] text-center inline-block"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}

export default Hero;
