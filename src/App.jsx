import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import './App.css'

function App() {

  return (
    <div className="App overflow-x-hidden">
      <Hero />
      <About />
      <Gallery />
    </div>
  )
}

export default App
