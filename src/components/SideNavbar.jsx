import React from 'react'

function SideNavbar() {
  // Soft pull easing
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

  const softScrollToSection = (id) => {
    const section = document.getElementById(id)
    if (!section) return

    const start = window.scrollY
    const end = section.getBoundingClientRect().top + start
    const distance = end - start
    const duration = 700
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      window.scrollTo(0, start + distance * eased)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

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
