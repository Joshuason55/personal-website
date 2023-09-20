import React from 'react';
import './Resume.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import Fade from 'react-reveal/Fade'


const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(161, 0, 0)', color: '#fff' }
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(0, 100, 161)', color: '#fff' }
};
 
function Resume() {
  const workTimeline = [
    { icon: workIcon, date: 'June 2022 - September 2022', title: 'Software Developer Intern', company: 'Seattle Market Analytics | Seattle, WA', desc: "Created the Crystal Ball tool aimed to provide investors with crucial trading insights. Utilizing ReactJs and MaterialUI, a dynamic web app emerged. Gathering feedback from users and colleagues led to several refined iterations of the tool. Collaboration with a Senior Backend Developer enabled seamless integration between the frontend and a Google Cloud backend, ensuring real-time user results. This approach amplified both my technical prowess and the value of user-centric design." },
    { icon: workIcon, date: 'September 2016 - August 2020', title: 'Host', company: 'Tokyo Steakhouse | Bellevue, WA', desc: 'Transitioned reservation system to an automated app, reducing peak-hour phone calls by allocating bookings based on table availability. Constant communication with management, wait staff, chefs, and guests to ensure immediate customer needs were met with efficiency and courtesy. Guests were warmly greeted, creating a welcoming atmosphere.' },

  ];
 
  const educationTimeline = [
    { icon: schoolIcon, date: 'September 2020 - Present', title: 'Bachelor of Science in Computer Science', school: 'University of California, Santa Barbara | Goleta, CA ', desc: "3.75 GPA, 3x Dean's List, Zeta Beta Tau Fraternity" },
    { icon: schoolIcon, date: 'September 2016 - June 2020', title: 'High School Degree',school: 'Eastlake High School | Sammamish, WA ', desc: '3.95 GPA, National Honor Society, Varsity Athlete, Scholar Athlete Award' },
  ];
  return (
    <div className='resume'>
      <div className='resume-container'>
        <Fade buttom duration={1000}>
          <h2>Resume</h2>
          <h5 id="title">Here's a deeper dive into my technical expertise and skill set...</h5>
          <h5>Work Experience</h5>
        </Fade>
        <VerticalTimeline>
          {workTimeline.map((t, i) => {
            const contentStyle = i === 0 ? { background: 'rgb(255, 255, 255)', color: '#88888' } : undefined;
            const arrowStyle = i === 0 ? { borderRight: '7px solid  rgb(255, 255, 255)' } : undefined;
  
            return <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? <React.Fragment>
                <h1 className="vertical-timeline-element-title">{t.title}</h1>
                <h3>{t.company}</h3>
                {t.desc && <p>{t.desc}</p>}
              </React.Fragment> : undefined}
            </VerticalTimelineElement>
          })}
        </VerticalTimeline>
        <Fade buttom duration={1000}>
          <h5 id='second'>Educational Background</h5>
        </Fade>

        <VerticalTimeline>
          {educationTimeline.map((t, i) => {
            const contentStyle = i === 0 ? { background: 'rgb(255, 255, 255)', color: '#88888' } : undefined;
            const arrowStyle = i === 0 ? { borderRight: '7px solid  rgb(255, 255, 255)' } : undefined;
  
            return <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? <React.Fragment>
                <h1 className="vertical-timeline-element-title">{t.title}</h1>
                <h3>{t.school}</h3>
                {t.desc && <p>{t.desc}</p>}
              </React.Fragment> : undefined}
            </VerticalTimelineElement>
          })}
        </VerticalTimeline>
        <div className='button-container'>
          <a href='https://drive.google.com/file/d/1jgYz_oipHZRereDJZs8kh3acNhjYIbNk/view?usp=sharing'>
            <Button label={'Download CV'} onClick={() => console.log('hello')}>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default Resume;