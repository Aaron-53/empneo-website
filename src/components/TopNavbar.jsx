import React from 'react'
import logo from "../assets/empneologo.png";
import {useNavigate } from 'react-router-dom'
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


function TopNavbar() {
  return (
  <nav className="fixed top-0 left-0 w-full shadow-md z-50">
    <div className="flex justify-between px-8 py-4 ">

      <div className="absolute top-0 left-8 cursor-pointer z-50" onClick={()=> scrollToSection('home')}>
        <img
                src={logo}
                alt="Empneo Logo"
                className="w-12 h-auto z-10 m-2" // Adjust size and styling as needed
              />
      </div>
      
      <div className="absolute left-1/2 -translate-x-1/2 top-4 flex gap-12 font-[MyFont] text-[#D49C3E] text-[22px] font-semibold">
        
        <div onClick={() => scrollToSection('home')} className="cursor-pointer">home</div>
        <div onClick={() => scrollToSection('about')} className="cursor-pointer">about</div>
        <div onClick={() => scrollToSection('gallery')} className="cursor-pointer">gallery</div>
        <div onClick={() => scrollToSection('contact')} className="cursor-pointer">contact</div>
      </div>
 
      
      <div className="flex gap-12 font-[MyFont] top-4  text-[22px] text-[#D49C3E] font-semibold ml-auto pr-8">
        <div onClick={() => scrollToSection('register')} className="cursor-pointer">Register Now</div>
      </div>
    </div>
  </nav>

  )}

export default TopNavbar