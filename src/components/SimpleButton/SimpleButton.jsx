import React from 'react';

import './simpleButton.scss';

const SimpleButtom = ({ title, link, isGit }) => {
  return (
    <div className={`s-btn`}>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className={`${isGit ? 'git-btn' : ''} simple-button hvr-radial-out`}
      >
        {' '}
        {isGit ? <i className='fab fa-github fa-1x'></i> : null}
        {title}
      </a>
    </div>
  );
};

export default SimpleButtom;
