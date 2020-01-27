import React from 'react';

import Header from '../Header/Header';

import './inkEffect.scss';

const InkEffect = ({
  onInk,
  setInk,
  isVisible,
  setVisibility,
  currentPage,
  setPage
}) => {
  return (
    <div className={`${isVisible ? 'add-visibility' : ''} ink-container`}>
      <Header
        onInk={onInk}
        setInk={setInk}
        isVisible={isVisible}
        setVisibility={setVisibility}
        currentPage={currentPage}
        setPage={setPage}
      />
      <div className={`bg ink-base ${onInk ? 'bg-ink' : ''}`}></div>
    </div>
  );
};

export default InkEffect;
