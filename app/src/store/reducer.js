// Actions Types
import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  SET_USER, 
  EMPTY_CART 
} from './types';

export const initialState = {
  cart: [],
  user: null,
};

// Get Total Amout Of Your Items Price
export const getTotalPrice = (cart) => {
  return cart?.reduce((amount, item) => amount += item.price, 0);
};

// Grep Name from user Email
export const getNameFromEmailUser = (user) => {
  return user?.email.replace(/@[^@]+$/, '');
}

export default function reducer(state, action){
  switch(action.type) {
    case SET_USER: return {
      ...state,
      user: action.user,
    };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    case REMOVE_FROM_CART:
      let newCart = [...state.cart];
      const index = newCart.findIndex((cartItem) => cartItem.id === action.id);

      if(index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.log('Item doesn\'t exists: ', action.id);
      };

      return {
        ...state,
        cart: newCart,
      };

    default: return state;
  };
};

