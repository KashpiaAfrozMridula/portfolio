import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import CaseStudies from './components/CaseStudies'
import HowIWork from './components/HowIWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <HowIWork />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

