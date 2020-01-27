import React from 'react';

import Menu from '../Menu/Menu';

import './header.scss';

const Header = ({
  onInk,
  setInk,
  isVisible,
  setVisibility,
  currentPage,
  setPage
}) => {
  return (
    <header className='menu'>
      <Menu
        currentPage={currentPage}
        setPage={setPage}
        onInk={onInk}
        setInk={setInk}
        isVisible={isVisible}
        setVisibility={setVisibility}
      />
    </header>
  );
};

export default Header;
