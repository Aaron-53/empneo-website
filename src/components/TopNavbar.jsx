import React from 'react'
import {useNavigate } from 'react-router-dom'

function TopNavbar() {
  return (
    <>
    
  <nav className="fixed top-0 left-0 w-full shadow-md z-50">
    <div className="flex justify-between px-8 py-4">
      
      <div className="flex gap-12 text-lg font-semibold">
        <div onClick={() => scrollToSection('home')} className="cursor-pointer">home</div>
        <div onClick={() => scrollToSection('about')} className="cursor-pointer">about</div>
        <div onClick={() => scrollToSection('gallery')} className="cursor-pointer">gallery</div>
        <div onClick={() => scrollToSection('contact')} className="cursor-pointer">contact</div>
      </div>

      <div className="flex gap-12 text-lg font-semibold">
        <div onClick={() => scrollToSection('register')} className="cursor-pointer">Register Now</div>
      </div>
    </div>
  </nav>
</>

  )}

export default TopNavbar