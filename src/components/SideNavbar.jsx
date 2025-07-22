import React from 'react'
 
function SideNavbar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col z-50 justify-around h-1/2">
      <button
        aria-label="Scroll to Hero"
        className="w-2 h-2 bg-[#d49c3e] hover:bg-[#a87d36] transition transform rotate-45"
        onClick={() => softScrollToSection('hero-section')}
      />
      <button
        aria-label="Scroll to About"
        className="w-2 h-2 bg-[#d49c3e] hover:bg-[#a87d36] transition transform rotate-45"
        onClick={() => softScrollToSection('about-section')}
      />
      <button
        aria-label="Scroll to Gallery"
        className="w-2 h-2 bg-[#d49c3e] hover:bg-[#a87d36] transition transform rotate-45"
        onClick={() => softScrollToSection('gallery-section')}
      />
    </div>
  )
}

export default SideNavbar
