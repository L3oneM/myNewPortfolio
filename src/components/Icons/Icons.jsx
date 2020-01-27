import React from 'react';

import './icons.scss';

const Icons = () => {
  return (
    <div className='icons-ctn'>
      <a
        href='https://github.com/L3oneM'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-github fa-3x'></i>
      </a>
      <a
        href='https://www.linkedin.com/in/apostolos-theodoros-matios-052107183/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-linkedin fa-3x'></i>
      </a>
      <a
        href='https://www.facebook.com/apostolis.matios.98'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-facebook fa-3x'></i>
      </a>
      {/* <a href='#!'>
          <i className='fab fa-telegram fa-3x'></i>
        </a> */}
    </div>
  );
};

export default Icons;
