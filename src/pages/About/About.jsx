import React from 'react';

import './about.scss';

const About = ({ setPage }) => {
  setPage('About Me');
  return (
    <div className='about-page'>
      <div className='about-page-ctn'>
        <div className='about-ctn'>
          <h1 className='about-header lg-heading'>about me</h1>
          <div className='bar'></div>
        </div>
        <div className='pers-info info-box'>
          <p>
            I am a Full Stack Web Developer and a Mathematician based in
            Thessaloniki, Greece. I enjoy coding, solving complex algorithmic
            problems and creating web apps. When I am not coding I usually play
            music.
          </p>
          <p>
            I studied Mathematics (with direction on Programming) in the
            University of Ioannina. I worked as a Mathematician and some years
            after I discovered my hidden passion for web development.
          </p>
          <a
            href='https://drive.google.com/open?id=1QCd3uwfA-fxWjC4AXXrPTg9cdHaUfz9i'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            For more info view my resume!{' '}
          </a>
        </div>
        <div className='skills'>
          <div className='skill-ctn'>
            <h2 className='sm-heading'>Coding Skills</h2>
            <div className='bar'></div>
          </div>
          <div className='skill-icons'>
            <div className='front info-box'>
              <h3 className='front-header'>FrontEnd</h3>
              <div className='bar sm-bar'></div>
              <div className='img-ctn'>
                <img src='/images/about/javascript.png' alt='js' />
                <img src='/images/about/react100.png' alt='react' />
                <img
                  src='/images/about/redux2.png'
                  alt='redux'
                  className='redux-icon'
                />
                <img src='/images/about/html.png' alt='html' />
                <img src='/images/about/css3.png' alt='css' />
                <img src='/images/about/d3.png' alt='d3' className='d3-icon' />
              </div>
            </div>
            <div className='back info-box'>
              <h3 className='back-header'>BackEnd</h3>
              <div className='bar sm-bar'></div>
              <div className='img-ctn'>
                <img
                  src='/images/about/node-express.png'
                  alt='node'
                  className='node-icon'
                />
                <img src='/images/about/firebase.jpg' alt='firebase' />
                <img
                  src='/images/about/mongodb.png'
                  alt='mongodb'
                  className='mongo-icon'
                />
              </div>
            </div>
            <div className='testing info-box'>
              <div className='test-ctn'>
                <h3 className='test-header'>Testing</h3>
                <div className='bar sm-bar'></div>
              </div>

              <div className='img-ctn'>
                <img src='/images/about/jest.png' alt='jest' />
              </div>
            </div>
          </div>
        </div>
        <div className='certificates'>
          {/* <div className='cert-ctn'>
            <h2 className='sm-heading'>Certificates</h2>
            <div className='bar'></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
