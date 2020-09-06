import React from 'react';

// Components
import LinkItem from './LinkItem';

// Style
import "./Links.scss";

const Links = () => {
  return (
    <nav className="nav">
      <LinkItem
        path="/login"
        optionOne="hello youssef,"
        optionTwo="sign in"
      />

      <LinkItem
        path="/login"
        optionOne="returns"
        optionTwo="& orders"
      />

      <LinkItem
        path="/checkout"
        optionOne="your"
        optionTwo="prime"
      />
    </nav>
  );
};

export default Links;
