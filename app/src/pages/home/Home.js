import React from 'react';

// Components
import { Banner, Products } from '../../components';

// Style
import "./Home.scss";

const Home = () => {
  const animal_toys = [
    'https://images-na.ssl-images-amazon.com/images/I/41+7ZmvKlUL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51rLnCge7AL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41VFhVMh8uL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/31y8TMTwRIL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/410IWzsZhvL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51AaJPOD4qL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41j+wOpGjEL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41ZmuuKMtmL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41lpBaEEjkL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41gU8tflgcL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41ABnWmX0eL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41F9RVTMUyL._AC_SY200_.jpg',
  ];

  const trending_video_games = [
    'https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/517J1Mfca0L._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/31AZvhYLyeL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51YWlGN4cuL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/31i3tpuXxxL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51TucFenMAL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/415-s5FkXIL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41fVBsNMNmL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41mCozLA9CL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41XcLWH8nYL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51INjwoZOsL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51-3DH9QFrL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51cqTo2C6LL._AC_SY200_.jpg',
  ];

  const amazon_top_seller = [
    'https://images-na.ssl-images-amazon.com/images/I/11tEFlSGn6L._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41ffko0T3kL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41KL+iXUXCL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51G8LfsNZzL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41yavwjp-8L._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/21zodo7QkUL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/21zodo7QkUL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41i+z-JR+zL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41tQ9dniedL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41bCxnHksnL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51D0s2WV2ML._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/416IxcmUpGL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51C17DrwacL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/410glGz65uL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41cEMMExIoL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/518Jchr5uPL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/31WocBK6ZHL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/315t-VOAjgL._AC_SY200_.jpg',
  ];

  return(
    <div>
      <Banner />
      <Products
        title="Stuffed Animals & Toys under"
        items={animal_toys}
      />
      <Products
        title="Trending in Video Games"
        items={trending_video_games}
      />
      <Products
        title="Amazon Top Sellers"
        items={amazon_top_seller}
      />
    </div>
  );
};

export default Home;
