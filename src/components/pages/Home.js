import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

function Home() {
  return (
    <>
        <HeroSection />
        <About />
        <Resume />
        <Projects />
        <Contact />
    </>
  );
}

export default Home;
