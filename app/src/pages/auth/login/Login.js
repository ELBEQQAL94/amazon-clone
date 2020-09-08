import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Amazon Logo
import AmazonLogo from '../../../images/amazon_logo.jpeg';

// authentication with firebase
import { auth } from '../../../services/firebase';

// Style
import './Login.scss';

const Login = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // login
  const login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      history.push('/');
    })
    .catch(error => {
      alert(error.message);
    });
  };

  // register
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      history.push('/');
    })
    .catch(error => {
      alert(error.message);
    });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src={AmazonLogo}
          alt="logo"
          title="logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <form>
          <h1 className="signin__title">sign in</h1>
          <h5 className="label__title">E-mail:</h5>
          <input
            className="signin__form__control"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <h5 className="label__title">Password:</h5>
          <input
            className="signin__form__control"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button onClick={login} type="submit" className="signin__button">
            Submit
          </button>
        </form>
        <p className="conditions">
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
        <button onClick={register} className="new__account__button">Create your Amazon account</button>
      </div>
    </div>
  );
};

export default Login;
