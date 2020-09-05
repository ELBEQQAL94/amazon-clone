import React, { useState } from 'react';

// Components
import Arrows  from './Arrows';
import Products from '../products/Products';

// Services
import {requests} from '../../services';

// Style
import "./Banner.scss";

const Banner = () => {

  const [currentImage, SetCurrentImage] = useState(0);

  const nextSlideShow = () => {
    SetCurrentImage(currentImage + 1);
    if(currentImage === requests.images.length - 1) {
      SetCurrentImage(0);
    }
  };

  const prevSlideShow = () => {
    const lastImage = requests.images.length - 1;
    SetCurrentImage(currentImage - 1);
    if(currentImage <= 0) {
      SetCurrentImage(lastImage);
    }
  };

  return (
    <div className="banner" style={{
      background: `url(${requests.images[currentImage]}) no-repeat`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
    }}>
      <Arrows
        prevSlideShow={prevSlideShow}
        nextSlideShow={nextSlideShow}
      />
      <Products
        title="Discover Amazon"
        items={requests.items}
      />
    </div>
  );
};

export default Banner;
