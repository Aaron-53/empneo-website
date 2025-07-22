import React from "react";
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";

function Hero() {

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <TopNavbar />
      <SideNavbar />
      Hero
    </div>
  );
}

export default Hero;
