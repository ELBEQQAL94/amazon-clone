import React from 'react';

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
    <p>Products card item</p>
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
