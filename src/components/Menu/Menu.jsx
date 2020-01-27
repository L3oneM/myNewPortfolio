import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu.scss';

const Menu = ({
  currentPage,
  setPage,
  onInk,
  setInk,
  isVisible,
  setVisibility,
  history
}) => {
  const handleClick = e => {
    const page = e.target.textContent;
    setPage(page);
    history.push(
      `/${
        page === 'About Me'
          ? 'about'
          : page === 'My Work'
          ? 'work'
          : page === 'Contact Me'
          ? 'contact'
          : ''
      }`
    );
    setInk(!onInk);
    if (isVisible) {
      setTimeout(() => {
        setVisibility(!isVisible);
      }, 1000);
    } else {
      setVisibility(!isVisible);
    }
  };
  return (
    <div className='menu-items'>
      <div
        className={`menu-item animated ${
          onInk ? 'fadeInRight' : 'fadeOutRight'
        }  ${currentPage === 'Home' ? 'home-link' : ''}`}
        onClick={e => handleClick(e)}
      >
        Home
      </div>
      <div
        className={`menu-item animated ${
          onInk ? 'fadeInLeft' : 'fadeOutLeft'
        } ${currentPage === 'About Me' ? 'about-link' : ''}`}
        onClick={e => handleClick(e)}
      >
        About Me
      </div>
      <div
        className={`menu-item animated ${
          onInk ? 'fadeInRight' : 'fadeOutRight'
        } ${currentPage === 'My Work' ? 'work-link' : ''}`}
        onClick={e => handleClick(e)}
      >
        My Work
      </div>
      <div
        className={`menu-item animated ${
          onInk ? 'fadeInLeft' : 'fadeOutLeft'
        } ${currentPage === 'Contact Me' ? 'contact-link' : ''}`}
        onClick={e => handleClick(e)}
      >
        Contact Me
      </div>
    </div>
  );
};

export default withRouter(Menu);
