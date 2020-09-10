import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Components
import { Navbar } from './components';

// Auth
import { Login } from './pages/auth';

// Pages
import { Home, Checkout } from './pages';

// Data layer
import { useStateValue } from './store/StateProvider';

// Actions Types
import { SET_USER } from './store/types';

// Auhtentication with firebase
import { auth } from './services/firebase';

const Routers = () => {

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
        </Switch>
      </div>
    </Router>
  );
};

export default Routers;
