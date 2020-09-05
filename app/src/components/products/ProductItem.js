import React, { useState } from 'react';

// prop types
import PropTypes from 'prop-types';

// Style
import "./ProductItem.scss";

const ProductItem = ({ items }) => {

  const [loadImag, setLoadImag] = useState(false);

  return (
    <div className="row__posters">
        {
          items?.map((item, index) =>
            // show this for 1s before show img
              (<img
                key={index}
                style={loadImag ? {} : {display: 'none'}}
                src={item}
                alt="item"
                title="item"
                className="row__poster"
                onLoad={() => setLoadImag(true)}
              />)
          )
        }
      </div>
  )
}

ProductItem.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ProductItem;
