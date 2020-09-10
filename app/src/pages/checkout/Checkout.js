import React from 'react';

// React Flip Move
import FlipMove from 'react-flip-move';

// Data layer
import { useStateValue } from '../../store/StateProvider';

// Components
import CheckoutProduct from './CheckoutProduct';
import { Subtotal } from '../../components';

// Style
import "./Checkout.scss";

const Checkout = () => {

  const [{cart}] = useStateValue();

  const renderItemsInCart = () => {
    return (
      <>
        <h2 className="checkout__title">Your Shopping Cart:</h2>
        <hr />
        <FlipMove>
          {
            cart?.map(({ id, title, price, image, rating }) => (
              <CheckoutProduct
                key={id}
                id={id}
                title={title}
                price={price}
                image={image}
                rating={rating}
              />
            ))
          }
        </FlipMove>
      </>
    );
  };

  return (
    <div className="container checkout">
      {
        cart?.length === 0 ? (
          <>
            <h2 className="checkout__title">Your  cart is empty!</h2>
            <hr />
          </>
        ): (renderItemsInCart())
      }
      <Subtotal />
    </div>
  );
};

export default Checkout;
