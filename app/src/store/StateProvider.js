/* Setup data layer */
import React, { createContext, useContext, useReducer } from 'react';

// Data Layer
const StateContext = createContext();

const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

const useStateValue = () => useContext(StateContext);

export {
  StateContext,
  StateProvider,
  useStateValue,
}
