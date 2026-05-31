import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Listings from './components/Listings'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Listings />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
