import React from 'react';
import { Link } from 'react-router-dom';

// Material UI Icon
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

// Style
import "./BasketIcon.scss";

const BasketIcon = () => {
  return (
    <Link to="/checkout" className="basket">
      <div className="basket__container">
        <div className="basket__container--icon">
          <span>0</span>
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="cart">
          cart
        </div>
      </div>
    </Link>
  );
};

export default BasketIcon;
