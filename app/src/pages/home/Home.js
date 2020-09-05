import React from 'react';

// Services
import {requests} from '../../services';

// Components
import { Banner, Products, ProductsCard } from '../../components';

// Style
import "./Home.scss";

const Home = () => {
  return(
    <div>
      <Banner />
      <Products
        title="Stuffed Animals & Toys under"
        items={requests.animalToys}
      />
      <Products
        title="Trending in Video Games"
        items={requests.trendingVideoGames}
      />
      <Products
        title="Amazon Top Sellers"
        items={requests.amazonTopSeller}
      />
      <ProductsCard />
    </div>
  );
};

export default Home;
