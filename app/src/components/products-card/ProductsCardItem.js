import React from 'react';

// Material UI Icons
import StarIcon from '@material-ui/icons/Star';

// Components
import { Button } from '../elements';

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
  return (
    <div className="products__card__item">
      <img
        src={image}
        alt={title}
        title={title}
        className="products__card__item--img"
      />
      <p className="product__title">{title}</p>
      <div className="product__rating">
        {
          Array(rating)
          .fill()
          .map((_) => (
            <StarIcon />
          ))
        }
      </div>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <Button />
    </div>
  );
};

ProductsCardItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductsCardItem;
