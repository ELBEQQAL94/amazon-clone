// Actions Types
import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const initialState = {
  cart: [
    {
      id: 9,
      title: 'Dell G5 Gaming Desktop, Intel Core i7- 9700, NVIDIA GeForce GTX',
      price: 849.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41ArK2B01eL._AC_SR400,600_.jpg',
      rating: 3,
    },
  ],
  //user: null,
};


export default function reducer(state, action){
  console.log('action: ', action);
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
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

