import React from 'react';

// Material UI Icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Data Layer
import { useStateValue } from '../../store/StateProvider';

// Action Type
import { ADD_TO_CART } from '../../store/types';

// Components
import { Button, Price, Stars } from '../elements';

// Types
import PropTypes from 'prop-types';

// Style
import "./ProductsCardItem.scss";

const ProductsCardItem = ({
  id,
  title,
  image,
  rating,
  price,
}) => {

  const [{cart}, dispatch] = useStateValue();

  // add to cart
  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      item: {
        id,
        title,
        image,
        rating,
        price,
      },
    });
  };

  return (
    <div className="products__card__item">
      <img
        src={image}
        alt={title}
        title={title}
        className="products__card__item--img"
      />
      <p className="product__title">{title}</p>
      <Stars rating={rating} />
      <Price price={price} />
      <Button Icon={AddShoppingCartIcon} title="Add to Cart" func={addToCart}/>
    </div>
  );
};

ProductsCardItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductsCardItem;
