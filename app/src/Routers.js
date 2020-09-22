import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Stripe.js
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Components
import { Navbar } from './components';

// Auth
import { Login } from './pages/auth';

// Pages
import { Home, Checkout, Payment, Orders } from './pages';

// Data layer
import { useStateValue } from './store/StateProvider';

// Actions Types
import { SET_USER } from './store/types';

// Auhtentication with firebase
import { auth } from './services/firebase';

const Routers = () => {

  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe('pk_test_51HQu3HAxKZgiNj411WBQxIe4sse4dlNmapBtoH07KMwIpS5fkvNZ7VqH4b2MP0W6dlK9BNBHIiJ1SBk4jWuiGpm400x17eZyFU');

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: SET_USER,
          user: null,
        });
      }
    });

    return () => {
      // cleanup
      unsubscribe();
    };
  },[]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Home />
          </Route>
          <Route path='/checkout'>
            <Navbar />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/payment'>
            <Navbar />
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/orders'>
            <Navbar />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routers;
