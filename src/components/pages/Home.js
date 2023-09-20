import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <>
        <HeroSection />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
    </>
  );
}

export default Home;
