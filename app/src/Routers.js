import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Components
import { Navbar } from './components';

// Pages

const Routers = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path='/'>
            <h1>Amazon clone!</h1>
          </Route>
          <Route path='/checkout'>
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
