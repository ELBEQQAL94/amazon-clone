import React from 'react';

// prop types
import PropTypes from 'prop-types';

// Style
import "./Button.scss";

const Button = ({func, title, Icon}) => {
  return (
    <button className="amazon__button" onClick={func}>
      <Icon /> {title}
    </button>
  );
};

Button.propTypes = {
  func: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
