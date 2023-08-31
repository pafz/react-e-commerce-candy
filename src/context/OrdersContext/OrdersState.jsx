import { createContext } from 'react';
import axios from 'axios';
const API_URL = 'http://localhost:3000';

export const OrdersProvider = ({ children }) => {
  const createOrder = async order => {
    const token = JSON.parse(localStorage.getItem('token'));
    try {
      await axios.post(
        API_URL + '/orders/createOrder',
        {
          productId: order.map(e => e.id),
          //TODO: Delivery is hardcoded, change it to dynamic value
          delivery: 1,
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
