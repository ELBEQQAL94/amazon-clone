import React from "react";

// Components
import ProductItem from './ProductItem';

// prop types
import PropTypes from 'prop-types';

import "./Products.scss";

const Products = ({ title, items }) => {

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <ProductItem items={items} />
    </div>
  );
};

Products.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Products;
