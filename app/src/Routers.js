import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Components
import { Navbar } from './components';

// Pages
import { Home, Checkout } from './pages';

const Routers = () => {
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
            <h1>Login!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routers;
