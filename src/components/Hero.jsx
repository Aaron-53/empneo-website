import React from "react";
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";
import Herobg from "../assets/empneobgbtr.jpg";
import logo from "../assets/empneologo.png";

function Hero() {

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center" id="hero-section" style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover", // changed from "fill" to "cover"
        backgroundPosition: "center",
      }}>
      <TopNavbar />
      <SideNavbar />
      <img
        src={logo}
        alt="Empneo Logo"
        className="w-48 h-auto z-10" // Adjust size and styling as needed
      />
  
    </div>
  );
}

export default Hero;
