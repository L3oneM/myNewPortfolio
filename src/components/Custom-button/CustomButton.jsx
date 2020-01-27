import React from 'react';

import './customButton.scss';

const CustomButton = ({ onInk, setInk, isVisible, setVisibility }) => {
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
      className={`btn btn-home animated ${
        onInk ? 'fadeOut' : 'fadeIn delay-3s'
      }`}
      onClick={handleClick}
    >
      Find out more...
      <div className='btn__horizontal'></div>
      <div className='btn__vertical'></div>
    </div>
  );
};

export default CustomButton;
