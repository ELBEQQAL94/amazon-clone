import React from 'react';

// prop types
import PropTypes from 'prop-types';

// Material UI Icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Style
import "./Button.scss";

const Button = ({addToCart}) => {
  return (
    <button className="amazon__button" onClick={addToCart}>
      <AddShoppingCartIcon /> Add to Cart
    </button>
  );
};

Button.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Button;
