import React, { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';

const Cart = () => {
  const { cart } = useContext(ProductsContext);
  console.log(cart);
  if (cart.length <= 0) {
    return <span>Your cart is empty</span>;
  }

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div key={i}>
        <span>{cartItem.name}</span>
        <span>{cartItem.price.toFix(2)} €</span>
      </div>
    );
  });
  return <div>{cartItem}</div>;
};

export default Cart;
