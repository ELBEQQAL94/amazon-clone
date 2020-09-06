import React from 'react';
import { Link } from 'react-router-dom';

// Material UI Icon
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

// State Provider
import {useStateValue} from '../../store/StateProvider';

// Style
import "./BasketIcon.scss";

const BasketIcon = () => {

  const [{cart}] = useStateValue();

  console.log('cart: ', cart);

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

export default BasketIcon;
