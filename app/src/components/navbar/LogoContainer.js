import React from 'react';
import { Link } from 'react-router-dom';

// Style
import "./LogoContainer.scss";

const LogoContainer = () => {
  return (
    <div className="logo__container">
      <Link to="/">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/magicarp/image/amazon-logo-white.svg" alt="amazon-logo" title="amazon-logo" />
      </Link>
    </div>
  );
};

export default LogoContainer;
