import React from 'react';
import './style.scss';

const Resume = () => {
  return (
    <div className='resume-wrapper'>
      <div className='page-title'>
        <h1>Resume</h1>
        <div className='page-subtitle'>
          <h4>Get in Touch</h4>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='block-title'>
              <h2>Education</h2>
            </div>
            <div className='timeline-item clearfix'>
              <h5 className='item-period '>2015-2020</h5>
              <span className='item-company'>
                University of Information Technology (UIT)
              </span>
              <h4 className='item-title'>Information Security</h4>
              <p>
                Learn about malware analysis, system testing, Vulnerability
                Analysis, Firewalls, IDS/IPS system, etc.
              </p>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='block-title'>
              <h2>Experience</h2>
            </div>
            <div className='timeline-item clearfix'>
              <h5 className='item-period '>JULY 2018 - SEP 2018</h5>
              <span className='item-company'>
                Certified Network Security Center (CNSC)
              </span>
              <h4 className='item-title'>Interns</h4>
              <p>- Together with the lecturers research thesis topics</p>
              <p>
                - There is the experience of the project using Django and Flask
                to write API
              </p>
            </div>
            <div className='timeline-item clearfix'>
              <h5 className='item-period '>JULY 2018 - Now</h5>
              <span className='item-company'>
                Thai Binh Engineering and Trading
              </span>
              <h4 className='item-title'>IT Part-time</h4>
              <p>
                - Web application development with Django
                <a href='https://smartthuanviet.cf/'> smartthuanviet.cf</a>
              </p>
              <p>- Website management</p>
              <p>- It help desk</p>
            </div>
            <div className='timeline-item clearfix'>
              <h5 className='item-period '>OCT 2019- DEC 2019</h5>
              <span className='item-company'>Beesight Soft</span>
              <h4 className='item-title'>Fresher Reactjs</h4>
              <p>- Be involved in projects with Reactjs.</p>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-12'>
            <div className='block-title'>
              <h2>Skills</h2>
            </div>
            <div className='timeline-item clearfix'>
              <p>- Programming language: Javascript ,Python, C++, C#.</p>
              <p>
                - Basic knowledge: Object Oriented Programming (OOP), Structured
                Query Language (SQL), HTML, CSS, SCSS, Bootstrap, Linux, Git.
              </p>
              <p>- Framework: ReactJS, Django, Flask.</p>
              <p>- Platform: Nodejs.</p>
              <p>- Having knowledge of information security.</p>
              <p>- Good teamwork skills.</p>
              <p>- Quickly absorb new technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
