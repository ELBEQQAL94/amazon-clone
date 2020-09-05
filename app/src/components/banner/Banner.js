import React, { useState } from 'react';

// Components
import Arrows  from './Arrows';
import Products from '../products/Products';

// Style
import "./Banner.scss";

const Banner = () => {

  const images = [
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg',
  ];

  const items = [
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg',
  ];

  const [currentImage, SetCurrentImage] = useState(0);

  const nextSlideShow = () => {
    SetCurrentImage(currentImage + 1);
    if(currentImage === images.length - 1) {
      SetCurrentImage(0);
    }
  };

  const prevSlideShow = () => {
    const lastImage = images.length - 1;
    SetCurrentImage(currentImage - 1);
    if(currentImage <= 0) {
      SetCurrentImage(lastImage);
    }
  };

  return (
    <div className="banner" style={{
      background: `url(${images[currentImage]}) no-repeat`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
    }}>
      <Arrows
        prevSlideShow={prevSlideShow}
        nextSlideShow={nextSlideShow}
      />
      <Products
        title="Discover Amazon"
        items={items}
      />
    </div>
  );
};

export default Banner;
