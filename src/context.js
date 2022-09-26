import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
   goods: [],
   loading: true,
   order: [],
   isCartShow: false,
   alertName: '',
};

export const ContextProvider = ({ children }) => {
   const [value, dispatch] = useReducer(reducer, initialState);

   value.removeProductFromOrder = (productId) => {
      dispatch({
         type: 'REMOVE_PRODUCT_FROM_ORDER',
         payload: { id: productId },
      });
   };

   value.addProductToOrder = (product) => {
      dispatch({
         type: 'ADD_PRODUCT_TO_ORDER',
         payload: product,
      });
   };

   value.incProductQuantity = (productId) => {
      dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: productId } });
   };

   value.decProductQuantity = (productId) => {
      dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: productId } });
   };

   value.closeAlert = () => {
      dispatch({ type: 'CLOSE_ALERT' });
   };

   value.handleCartShow = () => {
      dispatch({ type: 'TOGGLE_CART' });
   };

   value.setGoods = (data) => {
      dispatch({ type: 'SET_GOODS', payload: data });
   };

   return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
