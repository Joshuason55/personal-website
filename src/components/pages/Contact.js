import React from 'react';
import './Contact.css';
import { Fade } from 'react-reveal';

function Contact() {
  return (
    <div className='contact'>
      <Fade buttom duration={1000}>

      <section className='contact-start'>
        <h1 className='contact-start-title'>
          Contact Me!
        </h1>
        <p className='contact-start-title-heading'>
          I would love to connect with you
        </p>
        <p className='email-message'>You can send me an email at anytime...</p>
        <div class='email-icon'>
          <a href='mailto:joshuason2020@gmail.com'>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p id='second-text'className='email-message'>or Follow my Socials!</p>
        <div class='social-icons'>
          <a href='https://www.linkedin.com/in/joshuason55/'>
              <i id='second-linked' className="fab fa-linkedin"></i>
            </a>
            <a href='https://github.com/Joshuason55'>
              <i id='second-github' className="fab fa-github"></i>
            </a>
            <a href='https://www.instagram.com/josh.son/'>
              <i id='insta' className="fab fa-instagram"></i>
            </a>
        </div>
        <div className='copyright-container'>
          <div>
            <p className='copyright-text'>Edited by Joshua Son on 8/30/23 · © Copyright 2023 Joshua Son </p>
          </div>
        </div>
      </section>
      </Fade>
    </div>
  )
}

export default Contact
