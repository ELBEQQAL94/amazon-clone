import React from 'react';

// Types
import PropTypes from 'prop-types';

// Style
import "./Price.scss";

const Price = ({price}) => {
  return (
    <p className="product__price">
      <small>$</small>
      <strong>{price}</strong>
    </p>
  );
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
};

export default Price;
