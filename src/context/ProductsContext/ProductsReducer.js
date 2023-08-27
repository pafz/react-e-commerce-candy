const ProductsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'GET_PRODUCT_BY_ID':
      return {
        ...state,
        product: action.payload,
      };
    case 'CREATE_PRODUCT':
      return {
        ...state,
        product: action.payload,
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
      console.log(action);
      return {
        ...state,
        cart: state.cart.filter((product, index) => index != action.payload),
      };
    case 'SET_FILTERS':
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };
    default:
      return state;
  }
};

export default ProductsReducer;
