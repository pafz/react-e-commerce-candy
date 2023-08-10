import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { Link } from 'react-router-dom';

const Products = () => {
  const { getProducts, products, addCart, getById } =
    useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const product = products.map(product => {
    return (
      <div key={product.id}>
        <nav>
          <Link to={'/product/' + product.id}>{product.name}</Link>
        </nav>
        <span>{product.price.toFixed(2)}</span>
        <button onClick={() => addCart(product)}>Add Cart</button>
      </div>
    );
  });
  return <div>{product}</div>;
};

export default Products;
