import React, { forwardRef } from 'react';

// Types
import PropTypes from 'prop-types';

// Material UI Icons
import DeleteIcon from '@material-ui/icons/Delete';

// Components
import { Stars, Price, Button } from '../../components/elements';

// Data layer
import { useStateValue } from '../../store/StateProvider';

// Action Types
import { REMOVE_FROM_CART } from '../../store/types';

// Style
import "./CheckoutProduct.scss";

const CheckoutProduct = forwardRef(({
  id,
  title,
  image,
  rating,
  price,
}, ref) => {

  const [{cart}, dispatch] = useStateValue();

  // Remove from cart
  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      id,
    });
  };

  return (
    <div className="checkout__product" ref={ref}>
      <img
        className="checkout__product--img"
        src={image}
        alt={title}
        title={title}
      />
      <div className="checkout__product--info">
        <p>{title}</p>
        <Stars rating={rating}/>
        <Price price={price} />
        <Button Icon={DeleteIcon} title="Remove from Cart" func={removeFromCart}/>
      </div>
    </div>
  )
});

CheckoutProduct.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default CheckoutProduct;
