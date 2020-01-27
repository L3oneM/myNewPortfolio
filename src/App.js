import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Homepage/Homepage';
import InkEffect from './components/InkEffect/InkEffect';
import About from './pages/About/About';
import MyWork from './pages/MyWork/MyWork';
import Contact from './pages/Contact/Contact';
import SocialIcons from './components/Social-icons/SocialIcons';
import HamburgerIcon from './components/Hamburger-icon/HamburgerIcon';

const App = () => {
  const [currentPage, setPage] = useState('Home');
  const [onInk, setInk] = useState(false);
  const [isVisible, setVisibility] = useState(false);

  return (
    <div>
      <HamburgerIcon
        onInk={onInk}
        setInk={setInk}
        isVisible={isVisible}
        setVisibility={setVisibility}
        currentPage={currentPage}
      />
      <InkEffect
        onInk={onInk}
        setInk={setInk}
        isVisible={isVisible}
        setVisibility={setVisibility}
        currentPage={currentPage}
        setPage={setPage}
      />
      <Switch>
        <Route
          exact
          path='/'
          render={props => (
            <HomePage
              onInk={onInk}
              setInk={setInk}
              isVisible={isVisible}
              setVisibility={setVisibility}
            />
          )}
        />
        <Route
          exact
          path='/about'
          render={props => <About setPage={setPage} />}
        />
        <Route
          exact
          path='/work'
          render={props => <MyWork setPage={setPage} onInk={onInk} />}
        />
        <Route
          exact
          render={props => <Contact setPage={setPage} onInk={onInk} />}
        />
      </Switch>
      <SocialIcons currentPage={currentPage} />
    </div>
  );
};

export default App;
