import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { OrderContext } from '../../context/OrdersContext/OrdersState';

const Cart = () => {
  const { cart, clearCart, clearItem } = useContext(ProductsContext);
  const { createOrder, token } = useContext(OrderContext);

  if (cart.length <= 0) {
    return <span>Your cart is empty</span>;
  }

  const createNewOrder = () => {
    createOrder(cart, token);
    clearCart();
  };

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div key={i}>
        <span>{cartItem.name}</span>
        <span>{cartItem.price.toFixed(2)} €</span>
        <button onClick={() => clearItem()}>clear item</button>
      </div>
    );
  });

  return (
    <div>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button
        onClick={() => {
          createNewOrder(cart);
          clearCart();
        }}
      >
        Create order
      </button>
    </div>
  );
};

export default Cart;
