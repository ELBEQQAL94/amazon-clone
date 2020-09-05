import React from 'react';

// Components
import { Banner, Products } from '../../components';

// Style
import "./Home.scss";

const Home = () => {
  return(
    <div>
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
