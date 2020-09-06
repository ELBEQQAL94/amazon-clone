// Actions Types
import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const initialState = {
  cart: [],
  //user: null,
};


export default function reducer(state, action){
  console.log("initialState: ", initialState);
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case REMOVE_FROM_CART:
      return { state };
    default: return state;
  };
};

