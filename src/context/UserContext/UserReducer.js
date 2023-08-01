const users = (state, action) => {
  switch (action.type) {
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
      };
    default:
      return state;
  }
};

export default users;
