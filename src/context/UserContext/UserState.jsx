import { createContext, useReducer } from 'react';
import axios from 'axios';
import UserReducer from './UserReducer';

const token = JSON.parse(localStorage.getItem('token'));

const initialState = {
  token: token ? token : null,
  user: null,
};
export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async user => {
    console.log(user);
    const res = await axios.post(API_URL + '/users/login', user);
    dispatch({
      type: 'LOGIN',
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem('token', JSON.stringify(res.data.token));
    }
  };

  const getUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const res = await axios.get(API_URL + '/users/getUser', {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: 'GET_USER_INFO',
      payload: res.data.user,
    });
    return res;
  };

  const logout = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const res = await axios.delete(API_URL + '/users/logout', {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: 'LOGOUT',
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem('token');
    }
  };
  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        getUserInfo,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const API_URL = 'http://localhost:3000'; //el puerto que estemos usando en el backend
