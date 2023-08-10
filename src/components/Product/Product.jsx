import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { getById, product } = useContext(ProductsContext);
  const { id } = useParams();

  useEffect(() => {
    getById(id);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }
  console.log(product);
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Favorite: {product.favorite}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default Product;
