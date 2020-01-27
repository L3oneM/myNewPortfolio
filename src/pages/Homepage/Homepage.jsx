import React from 'react';

import CustomButton from '../../components/Custom-button/CustomButton';

import './homepage.scss';

const HomePage = ({ onInk, setInk, isVisible, setVisibility }) => {
  return (
    <div className='homepage'>
      <div className='container'>
        <h1
          className={`${
            onInk ? 'fadeOut fast' : 'fadeInLeft slow delay-1s'
          } lg-heading animated`}
        >
          Hello, I'm <span className='name'>Apostolis Matios</span>.
        </h1>
        <h2
          className={`${
            onInk ? 'fadeOut fast' : 'fadeInRight slow delay-1s'
          } sm-heading animated`}
        >
          I'm a Full Stack Web Developer.
        </h2>
        <CustomButton
          onInk={onInk}
          setInk={setInk}
          isVisible={isVisible}
          setVisibility={setVisibility}
        />
      </div>
    </div>
  );
};

export default HomePage;
