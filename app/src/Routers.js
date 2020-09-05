import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Components
import { Navbar } from './components';

// Pages
import { Home } from './pages';

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
            <h1>Check Out!</h1>
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
