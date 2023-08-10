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

  return <div>Product: {product.name}</div>;
};

export default Product;
