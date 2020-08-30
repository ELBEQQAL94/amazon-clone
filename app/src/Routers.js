import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const Routers = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/checkout'>
            <h1>Check Out!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routers;
