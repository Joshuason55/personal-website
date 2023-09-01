import React from 'react';
import '../App.css';
import './HeroSection.css';
import BackgroundVideo from './videos/WebsiteVideo.mp4';



function HeroSection() {
  return (
    <div className='hero-container' id= 'hero'>
      <video src={BackgroundVideo} autoPlay loop muted playsInline/>
      <div className='name'>JOSHUA SON</div>
      <p>SOFTWARE ENGINEER | BASED IN SEATTLE</p>
      <div className='website-logos'>
          <a href='https://www.linkedin.com/in/joshuason55/'>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href='https://github.com/Joshuason55'>
            <i className="fab fa-github"></i>
          </a>
      </div>

    </div>
  );
}

export default HeroSection;
