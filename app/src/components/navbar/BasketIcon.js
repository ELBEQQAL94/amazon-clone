import React from 'react';
import { Link } from 'react-router-dom';

// Material UI Icon
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

// Types
import PropTypes from 'prop-types';

// Style
import "./BasketIcon.scss";

const BasketIcon = ({cart}) => {
  return (
    <Link to="/checkout" className="basket">
      <div className="basket__container">
        <div className="basket__container--icon">
          <span>{cart?.length}</span>
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="cart">
          cart
        </div>
      </div>
    </Link>
  );
};

BasketIcon.propTypes = {
  cart: PropTypes.object.isRequired,
};

export default BasketIcon;
