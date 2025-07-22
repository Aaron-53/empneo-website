import React from "react";
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";
import Herobg from "../assets/empneobgbtr.jpg";
import logo from "../assets/empneologo.png";

function Hero() {

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center" id="hero-secion" style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover", // changed from "fill" to "cover"
        backgroundPosition: "center",
      }}>
      <TopNavbar />
      <SideNavbar />
      <div className="flex flex-col items-center">
  <div className="flex items-center space-x-6">
    <img
      src={logo}
      alt="Empneo Logo"
      className="w-16 h-auto z-10 hover:scale-110 transition-transform duration-300"
    />
    <img
      src={logo}
      alt="Empneo Logo"
      className="w-16 h-auto z-10 hover:scale-110 transition-transform duration-300"
    />
    <img
      src={logo}
      alt="Empneo Logo"
      className="w-16 h-auto z-10 hover:scale-110 transition-transform duration-300"
    />
  </div>
  <img
    src={logo}
    alt="Real Empneo Logo"
    className="w-90 h-auto z-10 -mt-24"
  />
</div>
  
    </div>
  );
}

export default Hero;
