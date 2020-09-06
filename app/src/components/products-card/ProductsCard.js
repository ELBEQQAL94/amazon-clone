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
          <ProductsCardItem
            id="1"
            title="Mrs. Meyer's Clean Day Liquid Hand Soap, Cruelty Free and Biodegradable Formula, Lavender Scent, 12.5 oz- Pack of 3"
            price={10.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51hEwypZfTL._AC_US160_.jpg"
          />
          <ProductsCardItem
            id="1"
            title="Mrs. Meyer's Clean Day Liquid Hand Soap, Cruelty Free and Biodegradable Formula, Lavender Scent, 12.5 oz- Pack of 3"
            price={10.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51hEwypZfTL._AC_US160_.jpg"
          />
          <ProductsCardItem
            id="1"
            title="Mrs. Meyer's Clean Day Liquid Hand Soap, Cruelty Free and Biodegradable Formula, Lavender Scent, 12.5 oz- Pack of 3"
            price={10.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51hEwypZfTL._AC_US160_.jpg"
          />
          <ProductsCardItem
            id="1"
            title="Mrs. Meyer's Clean Day Liquid Hand Soap, Cruelty Free and Biodegradable Formula, Lavender Scent, 12.5 oz- Pack of 3"
            price={10.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51hEwypZfTL._AC_US160_.jpg"
          />
          <ProductsCardItem
            id="1"
            title="Mrs. Meyer's Clean Day Liquid Hand Soap, Cruelty Free and Biodegradable Formula, Lavender Scent, 12.5 oz- Pack of 3"
            price={10.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51hEwypZfTL._AC_US160_.jpg"
          />
          <ProductsCardItem
            id="1"
            title="Mrs. Meyer's Clean Day Liquid Hand Soap, Cruelty Free and Biodegradable Formula, Lavender Scent, 12.5 oz- Pack of 3"
            price={10.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51hEwypZfTL._AC_US160_.jpg"
          />
          <ProductsCardItem
            id="1"
            title="Mrs. Meyer's Clean Day Liquid Hand Soap, Cruelty Free and Biodegradable Formula, Lavender Scent, 12.5 oz- Pack of 3"
            price={10.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51hEwypZfTL._AC_US160_.jpg"
          />
          <ProductsCardItem
            id="1"
            title="Mrs. Meyer's Clean Day Liquid Hand Soap, Cruelty Free and Biodegradable Formula, Lavender Scent, 12.5 oz- Pack of 3"
            price={10.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51hEwypZfTL._AC_US160_.jpg"
          />
        </div>
      </div>
  );
};

export default ProductsCard;
