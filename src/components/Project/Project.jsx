import React from 'react';

import SimpleButton from '../SimpleButton/SimpleButton';

import './project.scss';

const Project = ({ project, onInk }) => {
  const { title, imgUrl, demo, info, github } = project;
  return (
    <div
      className={`${
        onInk ? 'fadeOut fast' : 'fadeIn delay-1s'
      } project animated`}
    >
      <div className='title'>{title}</div>
      <img src={imgUrl} alt={`${title}`} className='project-image' />
      <div className='project-info'>
        {info}
        {/* <div className='mr-info'>More Info...</div> */}
      </div>

      <SimpleButton title={'Demo'} link={demo} />
      <SimpleButton title={'Github'} link={github} isGit />
    </div>
  );
};

export default Project;
