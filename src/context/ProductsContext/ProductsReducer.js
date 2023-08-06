const ProductsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'ADD_CART':
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'CLEAR_ITEM':
      return {
        ...state,
        product: '',
        products: action.payload,
      };
    default:
      return state;
  }
};

export default ProductsReducer;
