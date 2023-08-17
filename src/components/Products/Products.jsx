import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { Link } from 'react-router-dom';
import { Space, Input, Slider, Card, Button } from 'antd';
import './../../colors.scss';
import './Products.scss';
//TODO: usar button como component

const { Search } = Input;

const Products = () => {
  //TODO: button to findAll again after search???
  const { getProducts, products, addCart, filters, setFilters } =
    useContext(ProductsContext);

  useEffect(() => {
    getProducts(filters);
  }, [filters]);

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
      <div
        className="products_search"
        style={{
          margin: 'auto',
          width: '50%',
          alignItems: 'center',
          border: '3px solid green',
          padding: '2%',
        }}
      >
        <Space direction="vertical">
          <Search
            placeholder="search product"
            onSearch={searchTerm => {
              setFilters({ name: searchTerm });
            }}
          />
        </Space>
        <div className="search_price_text">
          <p className="search_price">search ₿</p>
          <Slider
            style={{ color: 'green' }}
            range={{
              draggableTrack: true,
            }}
            max={40}
            defaultValue={[1, 10]}
            onAfterChange={([low, high]) => {
              setFilters({ low, high });
            }}
          />
        </div>
      </div>
      <div className="products-container">
        {products.map(product => {
          return (
            <Card
              key={product.id}
              hoverable
              style={{
                width: 240,
                borderColor: 'red',
                color: 'red',
                background: '#d4adcf',
              }}
              title={product.favorite}
              cover={
                <img
                  alt={product.name}
                  src="./../../public/img/placeholder.png"
                />
              }
            >
              <nav className="product_name">
                <Link
                  to={'/product/' + product.id}
                  style={{
                    color: 'red',
                    fontSize: '150%',
                  }}
                >
                  {product.name}
                </Link>
              </nav>

              <Space className="site-button-ghost-wrapper" wrap>
                <Button ghost onClick={() => addCart(product)} style={{}}>
                  Add Cart
                </Button>
              </Space>
              <p>{product.price.toFixed(2)} ₿</p>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Products;
//https://ant.design/components/card
//https://ant.design/components/button
