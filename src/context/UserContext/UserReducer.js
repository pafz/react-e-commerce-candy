const users = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_USER_INFO':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
      };
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'GET_USER_ORDERS_PRODUCTS':
      return {
        ...state,
        ordersProducts: action.payload,
      };
    default:
      return state;
  }
};

export default users;
