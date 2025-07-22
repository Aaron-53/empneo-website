import React from "react";

import SideNavbar from "./SideNavbar";
import Herobg from "../assets/empneobgbtr.jpg";
import logo from "../assets/empneologo.png";
import ieee from "../assets/ieeelogos.png";

function Hero() {
  return (
    <div
      className="w-[100vw] h-[100vh] flex items-center justify-center pt-10"
      id="hero-section"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover", // changed from "fill" to "cover"
        backgroundPosition: "center",
      }}
    >
      <SideNavbar />
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-6">
          <img
            src={ieee}
            alt="IEEE Logos"
            className="w-55 h-auto z-10 hover:scale-110 transition-transform duration-300"
          />
        </div>
        <img
          src={logo}
          alt="Real Empneo Logo"
          className="w-90 h-auto z-10 "
        />
        <button className="font-[MyFont] mt-2 px-8 py-3 border-2 border-[#D49C3E] text-[#D49C3E] text-xl rounded-md hover:bg-[#D49C3E] hover:text-white transition-all duration-300">
  Register Now
</button>
      </div>
    </div>
  );
}

export default Hero;
