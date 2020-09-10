import React from 'react';

// prop types
import PropTypes from 'prop-types';

// Style
import './Alert.scss';

const Alert = ({message}) => {
  return (
    <div className="alert">
      {message}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Alert;
