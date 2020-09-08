import React from 'react';

// Components
import LogoContainer from './LogoContainer';
import SearchBox from './SearchBox';
import Links from './Links';
import BasketIcon from './BasketIcon';

// State Provider
import {useStateValue} from '../../store/StateProvider';

// Style
import "./Navbar.scss";

const Navbar = () => {

  const [{cart, user}] = useStateValue();

  return (
    <header className="header">
      <div className="header__container">
        <LogoContainer />
        <SearchBox />
        <Links user={user} />
        <BasketIcon cart={cart}/>
      </div>
      {/* Search box for mobile */}
      <div className="search__box--mobile">
        <SearchBox />
      </div>
    </header>
  );
};

export default Navbar;
