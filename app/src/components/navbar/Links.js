import React from 'react';
import { useHistory } from 'react-router-dom';

// Types
import PropTypes from 'prop-types';

// Components
import LinkItem from './LinkItem';

// Style
import "./Links.scss";

// Authentication with firebase
import { auth } from '../../services/firebase';

const Links = ({user}) => {

  const history = useHistory();

  const logout = () => {
    if(user) {
      auth.signOut();
      history.push('/login');
    }
  };

  return (
    <nav className="nav">
      {
        user === null ? (
          <LinkItem
            path="/login"
            optionOne="Hello"
            optionTwo="sign in"
          />
        ) : (
            <p className="logout" onClick={logout}>Sign Out</p>
        )
      }

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

Links.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Links;
