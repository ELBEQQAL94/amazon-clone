import React from 'react';

// Material UI Icons
import StarIcon from '@material-ui/icons/Star';

// Types
import PropTypes from 'prop-types';

// Style
import "./Stars.scss";

const Stars = ({rating}) => {
  return (
    <div className="product__rating">
      {
        Array(rating)
        .fill()
        .map((_, i) => (
          <StarIcon key={i}/>
        ))
      }
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
