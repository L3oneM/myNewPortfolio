import React, { useState } from 'react';

import { projectsData } from './projectsData';

import Project from '../../components/Project/Project';

import './myWork.scss';

const MyWork = ({ setPage, onInk }) => {
  const [projects] = useState(projectsData);
  setPage('My Work');

  return (
    <div className='myWork-page'>
      <div className='myWork-page-ctn'>
        <div className='header-ctn'>
          <h1 className='mywork-header lg-heading'>Projects</h1>
          <div className='bar'></div>
        </div>
        <i className='fas fa-arrow-down fa-3x ar-dw animated bounce slow infinite'></i>
        <div className='projects-container'>
          {projects.map(project => (
            <Project key={project.id} project={project} onInk={onInk} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
