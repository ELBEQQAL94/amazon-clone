import React from 'react';

// Material UI Icons
import SearchIcon from '@material-ui/icons/Search';

// Style
import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <div className="search__box">
      <form>
        <input type="search" className="search__box--input"/>
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
