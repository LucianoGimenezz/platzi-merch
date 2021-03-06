import { useState } from 'react';
import InitialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(InitialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id)
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [state.buyer, payload]
    });
  };
  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    });
  };

  return {
    state,
    addNewOrder,
    addToBuyer,
    addToCart,
    removeFromCart
  };
};

export default useInitialState;
