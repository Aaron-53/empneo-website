import React, { useEffect, useState } from 'react'

function SideNavbar() {
  const [activeSection, setActiveSection] = useState('hero-section')

  const sections = [
    { id: 'hero-section', label: 'Home' },
    { id: 'about-section', label: 'About' },
    { id: 'gallery-section', label: 'Gallery' },
  ]

  const softScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-4 top-1/2 transition-all duration-1000 -translate-y-1/2 flex flex-col z-50 justify-around h-1/2">
      {sections.map(({ id, label }) => (
        <div key={id} className="relative group flex items-center">
          <button
            aria-label={label}
            onClick={() => softScrollToSection(id)}
            className={`w-4 h-4 transform rotate-45 border-2 transition ${
              activeSection === id
                ? 'bg-[#d49c3e] border-[#a87d36]'
                : 'bg-transparent border-[#d49c3e]'
            } hover:bg-[#a87d36]`}
          />
          <div className="absolute left-8 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-[#d49c3e] px-4 py-2 relative flex items-center">
              <span className="font-[MyFont] text-white text-base tracking-wider">
                {label}
              </span>
              <div className="w-0 h-0 border-y-[20px] border-l-[20px] border-y-transparent border-l-[#d49c3e] absolute right-0 translate-x-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideNavbar