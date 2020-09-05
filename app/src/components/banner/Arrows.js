import React from 'react';

// Types
import PropTypes from 'prop-types';

// Material UI Icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// Style
import "./Arrows.scss";

const Arrows = ({prevSlideShow, nextSlideShow}) => {
  return (
    <div className="arrows">
      <div className="arrow__left">
          <ArrowBackIosIcon onClick={prevSlideShow} />
      </div>
      <div className="arrow__right">
          <ArrowForwardIosIcon onClick={nextSlideShow} />
      </div>
    </div>
  );
};

Arrows.propTypes = {
  prevSlideShow: PropTypes.func.isRequired,
  nextSlideShow: PropTypes.func.isRequired,
};

export default Arrows;
