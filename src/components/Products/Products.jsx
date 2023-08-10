import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { Link } from 'react-router-dom';
import { Space, Input } from 'antd';
const { Search } = Input;

const Products = () => {
  const { getProducts, products, addCart, getAllByName } =
    useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const searchProducts = searchTerm => {
    getAllByName(searchTerm);
  };

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

  return (
    <>
      <Space direction="vertical">
        <Search
          placeholder="search product"
          onSearch={searchProducts}
          style={{
            width: 200,
          }}
        />
      </Space>
      <div>{product}</div>
    </>
  );
};

export default Products;
