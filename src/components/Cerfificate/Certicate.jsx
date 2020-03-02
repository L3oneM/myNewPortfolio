import React from 'react';

import './certificate.scss';

const Certicate = ({ cert: { title, certUrl, info } }) => {
  return (
    <div className='certificate'>
      <div className='certTitle'>
        <a
          href={certUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='info-pars'
        >
          {title}
        </a>
      </div>
      <p className='info-pars'>{info}</p>
    </div>
  );
};

export default Certicate;
