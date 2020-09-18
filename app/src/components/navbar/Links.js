import React from 'react';
import { useHistory } from 'react-router-dom';

// Types
import PropTypes from 'prop-types';

// reducer
import { getNameFromEmailUser } from '../../store/reducer';

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
            optionOne="Hi, Guest"
            optionTwo="sign in"
          />
        ) : (
            <div className="nav__options" onClick={logout}>
              <span className="nav__option--one">Hi, {getNameFromEmailUser(user)}</span>
              <span className="nav__option--two">Sign Out</span>
            </div>
        )
      }

      <LinkItem
        path="/payment"
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
