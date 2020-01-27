import React from 'react';

import './hamburgerIcon.scss';

const HamburgerIcon = ({
  onInk,
  setInk,
  isVisible,
  setVisibility,
  currentPage
}) => {
  const handleClick = () => {
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
    <div
      className={`${
        onInk
          ? 'close fadeIn delay-1s'
          : currentPage === 'Home'
          ? 'fadeOut'
          : ''
      } animated menu-btn menu-btn-home`}
      onClick={handleClick}
    >
      <div className='btn-line'></div>
      <div className='btn-line'></div>
      <div className='btn-line'></div>
    </div>
  );
};

export default HamburgerIcon;
