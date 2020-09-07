import React from 'react';

// React Currency Format
import CurrencyFormat from 'react-currency-format';

// Matrial UI Icons
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

// Components
import { Button } from '../elements';

// Data layer
import { useStateValue } from '../../store/StateProvider';

// reducer
import { getTotalPrice } from '../../store/reducer';


// Style
import './Subtotal.scss';

const Subtotal = () => {

  const [{cart}] = useStateValue();

  const checkOut = () => {
    console.log('checkout...')
  };

  const renderItemsWithPrice = (value) => (
    <p>
      Subtotal ({cart.length}) items: <strong>{`${value}`}</strong>
    </p>
  );

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => renderItemsWithPrice(value)}
        decimalScale={2}
        value={getTotalPrice(cart)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <Button
        title="Buy Now"
        Icon={ShoppingBasketIcon}
        func={checkOut}
      />
    </div>
  );
};

export default Subtotal;
