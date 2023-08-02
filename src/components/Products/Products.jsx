import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';

const Products = () => {
  const { getProducts, products, addCart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

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
