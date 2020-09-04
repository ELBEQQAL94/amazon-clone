import React from 'react';

// Components
import LogoContainer from './LogoContainer';
import SearchBox from './SearchBox';
import Links from './Links';
import BasketIcon from './BasketIcon';

// Style
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <LogoContainer />
        <SearchBox />
        <Links />
        <BasketIcon />
      </div>
      {/* Search box for mobile */}
      <div className="search__box--mobile">
        <SearchBox />
      </div>
    </header>
  );
};

export default Navbar;
