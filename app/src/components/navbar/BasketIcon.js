import React from 'react';

// Material UI Icon
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

// Style
import "./BasketIcon.scss";

const BasketIcon = () => {
  return (
    <div className="basket__container">
      <div className="basket__container--icon">
        <span>0</span>
        <ShoppingCartOutlinedIcon />
      </div>
      <div className="cart">
        cart
      </div>
    </div>
  );
};

export default BasketIcon;
