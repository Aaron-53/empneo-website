import React, { useEffect, useState } from 'react'

function SideNavbar() {
  const [activeSection, setActiveSection] = useState('hero-section')

  const sections = [
    { id: 'hero-section', label: 'Scroll to Hero' },
    { id: 'about-section', label: 'Scroll to About' },
    { id: 'gallery-section', label: 'Scroll to Gallery' },
  ]

  // Easing function
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

  // Smooth scroll to section
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

  // Observe which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.6, // Trigger when 60% of section is visible
      }
    )

    sections.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col z-50 justify-around h-1/2">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          aria-label={label}
          onClick={() => softScrollToSection(id)}
          className={`w-4 h-4 transform rotate-45 border-2 transition ${
            activeSection === id
              ? 'bg-[#d49c3e] border-[#a87d36]' // Filled
              : 'bg-transparent border-[#d49c3e]' // Hollow
          } hover:bg-[#a87d36]`}
        />
      ))}
    </div>
  )
}

export default SideNavbar
