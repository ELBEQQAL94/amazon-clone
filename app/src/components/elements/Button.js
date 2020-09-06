import React from 'react';

// Material UI Icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Style
import "./Button.scss";

const Button = () => {
  return (
    <button className="amazon__button">
      <AddShoppingCartIcon /> Add to Cart
    </button>
  );
};

export default Button;
