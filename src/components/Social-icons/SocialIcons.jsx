import React from 'react';

import Icons from '../Icons/Icons';

import './socialIcons.scss';

const SocialIcons = ({ currentPage }) => {
  return (
    <footer>
      <div
        className={`${
          currentPage === 'Home' ? '' : 'hide-footer'
        } icons animated fadeIn`}
      >
        <Icons />
      </div>
      <div className='copyright'>Apostolos Matios &copy; 2019</div>
    </footer>
  );
};

export default SocialIcons;
