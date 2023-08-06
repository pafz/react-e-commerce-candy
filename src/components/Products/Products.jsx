import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';

const Products = () => {
  const { getProducts, products, addCart, cart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  //   useEffect(() => {
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //   }, [cart]);   SE GUARDA EN EL HEADER Y ASÍ ESTÁ ESCUCHANDO CONSTANTEMENTE, se evita repetir código aquí y en component > Cart

  const product = products.map(product => {
    return (
      <div key={product.id}>
        <span>{product.name}</span>
        <span>{product.price.toFixed(2)}</span>
        <button onClick={() => addCart(product)}>Add Cart</button>
      </div>
    );
  });
  return <div>{product}</div>;
};

export default Products;
