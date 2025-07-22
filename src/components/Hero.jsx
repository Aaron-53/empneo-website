import React from "react";
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";
import Herobg from "../assets/empneobg.png"
function Hero() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center" id="hero-secion" style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <TopNavbar />
      <SideNavbar />

  
    </div>
  );
}

export default Hero;
