import React from 'react'
import SideNavbar from './SideNavbar'

function App() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <SideNavbar />
      
      <section
        id="hero-section"
        className="min-h-screen snap-start flex items-center justify-center bg-red-100"
      >
        <h1 className="text-4xl">Hero Section</h1>
      </section>

      <section
        id="about-section"
        className="min-h-screen snap-start flex items-center justify-center bg-green-100"
      >
        <h1 className="text-4xl">About Section</h1>
      </section>

      <section
        id="gallery-section"
        className="min-h-screen snap-start flex items-center justify-center bg-blue-100"
      >
        <h1 className="text-4xl">Gallery Section</h1>
      </section>
    </div>
  )
}

export default App
