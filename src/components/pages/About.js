import React from 'react'
import './About.css'
import Fade from 'react-reveal/Fade'
import { Grid } from '@mui/material'
import Collage from './images/IMG_0924.JPG'

const About = () => {
    return (
        <div className='about'>
            <div className='about-title'>
                <h2>About Me!</h2>
            </div>
            <div className='about-grid-container'>
            <Grid container spacing={4} >
                <Grid item xs={1} sm={1} md={0} lg={1} xl={1}></Grid>

                <Grid item xs={10} sm={10}md={10} lg={5.5} xl={5} >
                    <Fade duration={1000}>
                        <div className='text'>
                            <p className='fade-in'>Hi and welcome to my website! My name is Joshua but most people call me Josh. Originally from Seattle, I'm currently a fourth-year student at UC Santa Barbara, excitedly anticipating graduation this summer and stepping into the professional world.</p>
                            <p>Outside academics, my passions are pretty eclectic. I've spent the majority of my life playing soccer at a high level, which fueled my drive and competitive spirit. I also love to snowboard, wake surf, rock climb, and generally enjoy the outdoors whenever I get the chance. When I am not outside, I usually play video games with my friends with my current favorites being Valorant and League of Legends. I also really enjoy music festivals, with my most recent being Coachella. </p>
                            <p>I'm a firm believer that everything is temporary and the key to personal growth is a willingness to continuously learn and evolve. So here I am, ready and eager to start my professional journey, committed to becoming the best version of myself along the way!</p>
                        </div>
                    </Fade>
                </Grid>
                <Grid xs={1} sm={1} md={2}></Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                    <img
                        className='collage'
                        src={Collage}
                        alt='collage'
                        
                    />
                </Grid>
                <Grid xs={0} md={0} lg={2.5} xl={3}></Grid>
            </Grid>
            </div>
        </div>
    )
}

export default About