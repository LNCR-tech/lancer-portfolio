import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import ParticleCanvas from './components/ui/ParticleCanvas'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import ScrollProgress from './components/ui/ScrollProgress'

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-navy-950 text-text-primary font-body overflow-x-hidden dark:bg-navy-950">
        <ParticleCanvas />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
