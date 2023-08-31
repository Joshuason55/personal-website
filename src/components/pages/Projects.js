import React from 'react'
import Card from './Card'
import './Projects.css'
import CrystalPicture from './cardphotos/stretchcrystal.png'
import PersonalWeb from './cardphotos/pwebphoto.png'
import KeepItGreen from './cardphotos/Keep_It_Green_Horizontal_r.png'
import { Grid } from '@mui/material'
import { Fade } from 'react-reveal'

function Projects() {
  return (
    <div className='projects'>
      <Fade buttom duration={1000}>
      <h2>Projects</h2> 
      <h5 id='title'>What I have worked on...</h5>
      </Fade>
      <div className='grid-container'>
      <Grid container spacing={3} justifyContent="center">

        {/* first card */}
        <Grid item xs={12} sm={12} md={6} lg={5} xl={3.5}>
          <Card
            photonumber={'img1'}
            imageUrl={CrystalPicture}
            title="Crystal Ball"
            description="Full-stack project that is a gamified web application that intends to test crystal ball product with user data."
            language='ReactJS, MaterialUI, CSS, Google Cloud Backend'
            url='https://github.com/Joshuason55/CrystalBall'
            githublogo='fab fa-github'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={5} xl={3.5}>
          <Card
            photonumber={'img2'}
            imageUrl={PersonalWeb}
            title="Personal Website"
            description="Frontend project where I developed my own cross-platform portfolio website."
            language='ReactJS, CSS, MaterialUI, Github Pages'
            url='https://github.com/Joshuason55/'
            githublogo='fab fa-github'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={5} xl={3.5}>
          <Card
            photonumber={'img3'}
            imageUrl={KeepItGreen}
            title="KeepItGreen"
            description="Created a mobile app leveraging machine learning to identify waste classifications using smartphone camera images."
            language="Python, Java, Firebase"
          />
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default Projects