import React, { useState } from 'react';

// requests
import {request} from './services';

// Components
import {
  Header,
  Navbar,
  Footer,
} from './components';

// Routers
import Routers from './Routers';

// Styles
import "./App.scss";

const App = () => <Routers />;

export default App;
