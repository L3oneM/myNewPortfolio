import React from 'react';

import Icons from '../../components/Icons/Icons';

import './contact.scss';

const Contact = ({ setPage, onInk }) => {
  setPage('Contact Me');
  return (
    <div
      className={`${
        onInk ? 'fadeOut' : 'fadeIn delay-1s'
      } contact-page animated`}
    >
      <div className='cnt-info'>
        <h1 className='lg-heading animated fadeInLeft slow delay-1s'>
          Contact Me
        </h1>
        <div className='bar animated fadeInRight slow delay-1s'></div>
        <h3 className='sm-heading animated fadeInLeft slow delay-1s'>
          Do you have a question or want to work together?
        </h3>
        <div className='email animated fadeInRight slow delay-1s'>
          <span>Email: </span>apomatios@gmail.com
        </div>
        <Icons />
      </div>
    </div>
  );
};

export default Contact;
