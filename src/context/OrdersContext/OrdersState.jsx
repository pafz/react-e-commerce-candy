import { createContext } from 'react';
import axios from 'axios';
const API_URL = 'http://localhost:3000';

export const OrdersProvider = ({ children }) => {
  const createOrder = async order => {
    const token = JSON.parse(localStorage.getItem('token'));
    try {
      await axios.post(
        API_URL + '/orders/createOrder',
        // order es arr de Obj y le paso un arr de num -> looping
        // [{id: 4, ...}, {id: 2, ...}]
        // [4, 2]
        {
          productId: order.map(e => e.id),
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        createOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const OrderContext = createContext();
