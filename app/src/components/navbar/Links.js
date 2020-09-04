import React from 'react';
import { Link } from 'react-router-dom';

// Style
import "./Links.scss";

const Links = () => {
  return (
    <nav className="nav">
      <Link to="/login" className="nav__link">
        <div className="nav__options">
          <span className="nav__options--one">hello youssef,</span>
          <span className="nav__options--two">sign in</span>
        </div>
      </Link>
      <Link to="/login" className="nav__link">
        <div className="nav__options">
          <span className="nav__options--one">returns</span>
          <span className="nav__options--two">& orders</span>
        </div>
      </Link>
      <Link to="/login" className="nav__link">
        <div className="nav__options">
          <span className="nav__options--one">your</span>
          <span className="nav__options--two">prime</span>
        </div>
      </Link>
    </nav>
  );
};

export default Links;
