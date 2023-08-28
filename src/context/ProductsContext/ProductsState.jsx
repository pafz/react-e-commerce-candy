import { createContext, useContext, useReducer } from 'react';
import ProductsReducer from './ProductsReducer';
import axios from 'axios';
import { UserContext } from '../UserContext/UserState';

const cart = JSON.parse(localStorage.getItem('cart'));

const initialState = {
  products: [],
  cart: cart ? cart : [],
  product: null,
  filters: {},
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  const { token } = useContext(UserContext);

  const getProducts = async filters => {
    let query = '?';

    if (filters?.name) {
      query += 'name=' + filters.name;
    }

    if (filters?.low && filters?.high) {
      query += '&low=' + filters.low + '&high=' + filters.high;
    }

    const res = await axios.get(API_URL + '/products/getProducts' + query);
    dispatch({
      type: 'GET_PRODUCTS',
      payload: res.data,
    });
  };

  const getById = async id => {
    const res = await axios.get(API_URL + '/products/getById/' + id);
    dispatch({
      type: 'GET_PRODUCT_BY_ID',
      payload: res.data,
    });
  };

  // const getAllByName = async searchTerm => {
  //   const res = await axios.get(
  //     API_URL + '/products/getAllByName/' + searchTerm
  //   );
  //   dispatch({
  //     type: 'GET_PRODUCTS',
  //     payload: res.data,
  //   });
  // };

  //TODO: hardcoded
  // const getProductsBetweenPrice = async ({ low, high }) => {
  //   const res = await axios.get(
  //     API_URL + '/products/getProductsBetweenPrice/' + { low: 0, high: 1 }
  //   );
  //   dispatch({
  //     type: 'GET_PRODUCTS',
  //     payload: res.data,
  //   });
  // };

  const createProduct = async product => {
    const res = await axios.post(API_URL + '/products', product, {
      headers: { Authorization: token },
    });
  };

  const updateProduct = async product => {
    const res = await axios.put(API_URL + '/products/' + product.id, product, {
      headers: { Authorization: token },
    });
  };

  const deleteProduct = async product => {
    const res = await axios.delete(API_URL + '/products/' + product.id, {
      headers: { Authorization: token },
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

  const clearItem = product => {
    dispatch({
      type: 'CLEAR_ITEM',
      payload: product,
    });
  };

  const setFilters = filters => {
    dispatch({
      type: 'SET_FILTERS',
      payload: filters,
    });
  };

  ///// return debe ir fuera de las funciones, devuelve lo que se introduzca para hacerlo global y devolverla, para usarla en cualquier parte
  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        product: state.product,
        cart: state.cart,
        filters: state.filters,
        getProducts,
        getById,
        // getAllByName,
        // getProductsBetweenPrice,
        deleteProduct,
        createProduct,
        updateProduct,
        addCart,
        clearCart,
        clearItem,
        setFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const API_URL = 'http://localhost:3000';
export const ProductsContext = createContext(initialState);
