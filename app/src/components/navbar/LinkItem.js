import React from 'react';
import { Link } from 'react-router-dom';

// Types
import PropTypes from 'prop-types';

// Style
import "./LinkItem.scss";

const LinkItem = ({path, optionOne, optionTwo}) => {
  return (
    <Link to={path} className="nav__link">
      <div className="nav__options">
        <span className="nav__option--one">{optionOne}</span>
        <span className="nav__option--two">{optionTwo}</span>
      </div>
    </Link>
  );
};

LinkItem.propTypes = {
  path: PropTypes.string.isRequired,
  optionOne: PropTypes.string.isRequired,
  optionTwo: PropTypes.string.isRequired,
};

export default LinkItem;
