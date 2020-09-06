import React from 'react';

// Services
import {products} from '../../services';

// Components
import ProductsCardItem from './ProductsCardItem';

// Style
import "./ProductsCard.scss";

const ProductsCard = () => {
  return (
    <div className="products__card">
        <div className="products__card__container">
          {
            products?.map(({id, title, price, rating, image}) => (
              <ProductsCardItem
                key={id}
                id={id}
                title={title}
                price={price}
                rating={rating}
                image={image}
              />
            ))
          }
        </div>
      </div>
  );
};

export default ProductsCard;
