import { createContext, useReducer } from 'react';
import ProductsReducer from './ProductsReducer';
import axios from 'axios';

const initialState = {
  products: [],
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL + '/products/getProducts'); //TODO: placeholder, create endpoint getProducts
    dispatch({
      type: 'GET_PRODUCTS',
      payload: res.data,
    });
  };
  ///// return debe ir fuera de las funciones, devuelve lo que se introduzca para hacerlo global y devolverla, para usarla en cualquier parte
  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const API_URL = 'http://localhost:3000';
export const ProductsContext = createContext(initialState);
