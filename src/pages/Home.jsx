import React from 'react'
import Hero from '../components/Hero'
import About from '../pages/About'
import Projects from './Projects'
import Footer from './Footer'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    
    </div>
  )
}

export default Home