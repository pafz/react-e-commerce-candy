import { createContext, useReducer } from 'react';
import ProductsReducer from './ProductsReducer';
import axios from 'axios';

const cart = JSON.parse(localStorage.getItem('cart'));

const initialState = {
  products: [],
  cart: cart ? cart : [],
  product: null,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL + '/products/getProducts');
    dispatch({
      type: 'GET_PRODUCTS',
      payload: res.data,
    });
  };

  //FIXME:
  const getById = async id => {
    const res = await axios.get(API_URL + '/products/getById/' + id);
    dispatch({
      type: 'GET_PRODUCT_BY_ID',
      payload: res.data,
    });
  };

  const addCart = product => {
    dispatch({
      type: 'ADD_CART',
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  const clearItem = () => {
    dispatch({
      type: 'CLEAR_ITEM',
    });
  };

  ///// return debe ir fuera de las funciones, devuelve lo que se introduzca para hacerlo global y devolverla, para usarla en cualquier parte
  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        product: state.product,
        getProducts,
        getById,
        addCart,
        cart: state.cart,
        clearCart,
        clearItem,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const API_URL = 'http://localhost:3000';
export const ProductsContext = createContext(initialState);
